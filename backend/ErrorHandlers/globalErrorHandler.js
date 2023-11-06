const { CustomError } = require("../CustomErrors/customError");
const { StatusCodes } = require("http-status-codes");

const globalErrorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    msg: "Something went wrong internally",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = globalErrorHandler;
