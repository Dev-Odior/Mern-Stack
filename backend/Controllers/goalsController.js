const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  NotFoundError,
} = require("../CustomErrors/customError");
const Goal = require("../Models/goalsModel");

//@desc Get goals
//@route GET/api/goals
//@access Private
const getGoals = async (req, res) => {
  const goals = await Goal.find({});
  if (goals.length < 1) {
    throw new NotFoundError("No goals found");
  }
  res.status(StatusCodes.OK).json(goals);
};

//@desc Create goals
//@route POST/api/goals
//@access Private
const setGoal = async (req, res) => {
  if (!req.body.text) {
    throw new BadRequestError("Please input valid credentials");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(StatusCodes.CREATED).json(goal);
};

//@desc Update goals
//@route PUT/api/v1/goals/:id
//@access Private
const updateGoal = async (req, res) => {
  const id = req.params.id;
  const goal = await Goal.findById(id);
  if (!goal) {
    throw new NotFoundError(`No goal with the id ${id} exists`);
  }

  if (!req.body.text) {
    throw new BadRequestError("Please input valid credentials");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, { new: true });

  res.status(StatusCodes.OK).json(updatedGoal);
};

//@desc Delete goals
//@route DEL/api/v1/goals/:id
//@access Private
const deleteGoal = async (req, res) => {
  const id = req.params.id;
  const find = await Goal.findById(id);

  if (!find) {
    throw new NotFoundError(`No goal with the id ${id} exists`);
  }

  await Goal.findOneAndDelete({ _id: id });
  res.status(StatusCodes.OK).json({ id: id });
};

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
