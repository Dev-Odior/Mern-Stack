const express = require("express");
const router = express.Router();

const controller = require("../Controllers/appController");

router.route("/test").get(controller);

module.exports = router;
