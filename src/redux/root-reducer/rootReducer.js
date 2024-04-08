import { combineReducers } from "@reduxjs/toolkit";
import toastReducer, {
  initialState as toastIntialState,
} from "../feature/toast/toastSlice";
import authReducer, {
  initialState as authInitialState,
} from "../feature/auth/authSlice";
import blogReducer, {
  initialState as blogInitialState,
} from "../feature/blog/blogSlice";

const rootReducer = (state, action) => {
  if (action.type === "RESET_STATE") {
    state = {
      toast: toastIntialState,
      auth: authInitialState,
      blog: blogInitialState,
    };
  }
  return combineReducers({
    toast: toastReducer,
    auth: authReducer,
    blog: blogReducer,
  })(state, action);
};

export default rootReducer;
