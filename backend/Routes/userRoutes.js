const express = require("express");
const router = express();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../Controllers/userController");

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(getUser);

module.exports = router;
