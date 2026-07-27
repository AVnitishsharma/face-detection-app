const blacklistModel = require("../model/blacklist.model");
const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
const redis = require("../config/cache");

async function authuser(req, res, next) {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    // Check if the token is in the blacklist
    const blacklistedToken = await redis.get(token);
    if (blacklistedToken) {
      return res.status(401).json({ message: "Unauthorized: Token is blacklisted" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!decodedToken) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    const user = decodedToken ? await userModel.findById(decodedToken.id) : null;
    if (!user) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in authuser middleware:", error);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
}

module.exports = {authuser};