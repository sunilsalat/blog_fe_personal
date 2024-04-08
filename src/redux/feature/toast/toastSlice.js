import { createSlice } from "@reduxjs/toolkit";
import { success } from "../../../constant/data";

export const initialState = {
  message: "",
  toolTipMessage: "",
  type: success,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    clearMessage: (state) => {
      state.message = "";
      state.type = success;
    },
  },
});

export const { setMessage, clearMessage } = toastSlice.actions;

export default toastSlice.reducer;
