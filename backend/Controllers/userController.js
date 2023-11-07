const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  NotFoundError,
} = require("../CustomErrors/customError");
const User = require("../Models/userModel");

//@desc Create a User
//@route POST/api/user
//@access Public
const registerUser = async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    throw new BadRequestError("Please fill out all fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    console.log("this is here");
    throw new BadRequestError("You already have an account, Please Login");
  }

  const newUser = await User.create({ email, password, name });

  const token = newUser.JWT_TOKEN({ id: newUser._id });

  res.json({
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    token,
  });
};

//@desc Authenticate a User
//@route POST/api/user
//@access Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const findUser = await User.findOne({ email });

  if (!findUser) {
    throw new NotFoundError("User does not exist, please register");
  }

  const verify = await findUser.comparePassword(password);

  if (!verify) {
    throw new BadRequestError("You have entered a wrong password");
  }

  const token = findUser.JWT_TOKEN({ id: findUser._id });

  res.status(StatusCodes.OK).json({
    _id: findUser._id,
    name: findUser.name,
    email: findUser.email,
    token,
  });
};

//@desc Get a User
//@route Get/api/user/me
//@access Public
const getUser = (req, res) => {
  const { _id, name, email } = req.user;
  res.status(200).json({ id: _id, name, email });
};

module.exports = { registerUser, loginUser, getUser };
