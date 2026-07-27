const userModel = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const blacklistModel = require("../model/blacklist.model");
const redis = require("../config/cache");

async function registerUser(req, res) {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await userModel.findOne({ $or: [
      { username }, { email }
    ] });
    
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new userModel({
      username,
      email,
      password: hashedPassword,
    });
    
    // Generate a token
    const token = jwt.sign({
       id: user._id,
       username: user.username,
      }, process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Save the user to the database
    await user.save();

    // Set the token in the cookie
    res.cookie("token", token, { httpOnly: true });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function loginUser(req, res) {
  const { email, password, username } = req.body;

  try {
    // Check if the user exists
    const user = await userModel.findOne({ $or: [
      { username }, { email }
    ] }).select("+password"); // Include password in the query result

    if (!user) {
      return res.status(401).json({ message: "invalid credentials" });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials password" });
    }

    // Generate a token
    const token = jwt.sign({
       id: user._id,
       username: user.username,
      }, process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Set the token in the cookie
    res.cookie("token", token, { httpOnly: true });

    res.status(200).json({
      message: "User logged in successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getMe(req, res) {
  try {
    const user = await userModel.findById(req.user._id);
    res.status(200).json({
      message: "User retrieved successfully",
      user
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function logoutUser(req, res) {

  const token = req.cookies.token;
  try {
    // Clear the token cookie
    res.clearCookie("token");

    // Add the token to the blacklist
    // await blacklistModel.create({ token });

    // Add the token to Redis blacklist
    await redis.set(token, Date.now().toString(), 'EX', 60 * 60); // Set expiration time to 1 day

    res.status(200).json({ 
      message: "User logged out successfully",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
  logoutUser
};