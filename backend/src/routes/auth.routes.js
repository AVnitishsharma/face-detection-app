const { Router } = require("express");
const { registerUser, loginUser, getMe, logoutUser} = require("../controller/auth.controller");
const { authuser} = require("../middleware/auth.middleware");

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser );
router.get("/getme", authuser , getMe);
router.get("/logout", authuser, logoutUser);

module.exports = router;