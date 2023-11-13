import axios from "axios";
const API_URL = "/api/v1/users";
const LOGIN_URL = "/api/v1/users/login";

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem("users", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(LOGIN_URL, userData);
  if (response.data) {
    localStorage.setItem("users", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = async () => {
  localStorage.removeItem("users");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
