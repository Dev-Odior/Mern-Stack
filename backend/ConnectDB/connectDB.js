const mongoose = require("mongoose");

const bunyan = require("bunyan");
const logger = bunyan.createLogger({ name: "connect DB" });

const connectDB = (url) => {
  try {
    return mongoose.connect(url);
  } catch (error) {
    logger.error("Failed to connect to db");
  }
};

module.exports = connectDB;
