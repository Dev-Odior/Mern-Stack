const JWT = require("jsonwebtoken");
const {
  BadRequestError,
  NotFoundError,
} = require("../CustomErrors/customError");
const User = require("../Models/userModel");

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith(`Bearer `)
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    throw new BadRequestError("Not authorized");
  }

  const verifyToken = JWT.verify(token, process.env.JWT_SECRET);

  if (!verifyToken) {
    throw new BadRequestError("Not authorized");
  }

  const id = verifyToken.id;
  const user = await User.findOne({ _id: id }).select("-password");

  if (!user) {
    throw new NotFoundError("User not found");
  }
  console.log(user);
  req.user = user;
  next();
};

module.exports = { protect };
