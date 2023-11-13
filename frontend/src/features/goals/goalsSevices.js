import axios from "axios";

const CREATE_URL = "/api/v1/goals";
const GET_GOALS = "/api/v1/goals";

const createGoal = async (payload, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(CREATE_URL, payload, config);

  return response.data;
};

const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(GET_GOALS, config);
  return response.data;
};

export const goalsHandler = {
  createGoal,
  getGoals,
};
