const express = require("express");
const router = express();
const { protect } = require("../Middleware/authentication");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../Controllers/userController");

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(protect, getUser);

module.exports = router;
