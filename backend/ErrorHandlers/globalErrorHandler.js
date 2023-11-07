const { CustomError } = require("../CustomErrors/customError");
const { StatusCodes } = require("http-status-codes");

const globalErrorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  if (err._message === "User validation failed") {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "There is problem with your request, Check you values" });
  }

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    msg: "Something went wrong internally",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = globalErrorHandler;
