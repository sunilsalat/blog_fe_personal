import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, registerUser } from "./authAction";

export const initialState = {
  isLoading: false,
  isLoggedIn: false,
  userData: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuthState: (state) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.userData = {};
    },
  },
  extraReducers: (builder) => {
    builder
      //register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
      })
      // login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
      })
      //logout
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
