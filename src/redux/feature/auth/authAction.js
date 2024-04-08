import createAsyncThunkForSlice from "../../../utils";
import { login, logout, register } from "./authCrud";

export const registerUser = createAsyncThunkForSlice(
  "auth/registerUser",
  register,
  {
    isToast: true,
  }
);

export const loginUser = createAsyncThunkForSlice("auth/loginUser", login, {
  isToast: true,
});

export const logoutUser = createAsyncThunkForSlice("auth/logoutUser", logout, {
  isToast: true,
});
