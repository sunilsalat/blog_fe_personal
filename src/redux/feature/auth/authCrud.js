import axios from "axios";
import { LOGIN_URL, LOGOUT_URL, REGISTER_URL } from "../../../config/config";

export const register = (data) => {
  return axios.post(REGISTER_URL, data);
};

export const login = (data) => {
  return axios.post(LOGIN_URL, data);
};

export const logout = (data) => {
  return axios.post(LOGOUT_URL, data);
};
