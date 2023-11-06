const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../CustomErrors/customError");

//@desc Get goals
//@route GET/api/goals
//@access Private
const getGoals = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "To fetch all goals" });
};

//@desc Create goals
//@route POST/api/goals
//@access Private
const setGoal = async (req, res) => {
  console.log(req.body, "The body files");
  if (!req.body.text) {
    throw new BadRequestError("Please input valid credentials");
  }
  res.status(StatusCodes.CREATED).json({ msg: "Goals Created" });
};

//@desc Update goals
//@route PUT/api/v1/goals/:id
//@access Private
const updateGoal = async (req, res) => {
  const id = req.params.id;
  res.status(StatusCodes.OK).json({ msg: `${id} goals has been updated` });
};

//@desc Delete goals
//@route DEL/api/v1/goals/:id
//@access Private
const deleteGoal = async (req, res) => {
  const id = req.params.id;
  res.status(StatusCodes.OK).json({ msg: `${id} goals has been updated` });
};

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
