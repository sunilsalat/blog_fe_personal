import { createSlice } from "@reduxjs/toolkit";
import {
  addNewBlog,
  blogStatus,
  getAllAdminBlog,
  getAllCategory,
} from "./blogAction";

export const initialState = {
  isLoading: false,
  blogData: [],
  categoryData: [],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    clearBlogState: (state) => {
      state.isLoading = false;
      state.blogData = [];
    },
  },
  extraReducers: (builder) => {
    builder
      //register
      .addCase(addNewBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewBlog.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addNewBlog.rejected, (state, action) => {
        state.isLoading = false;
      })

      // get blogs

      .addCase(getAllAdminBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllAdminBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogData = action.payload.data;
      })
      .addCase(getAllAdminBlog.rejected, (state, action) => {
        state.isLoading = false;
      })

      // feedback

      .addCase(blogStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(blogStatus.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(blogStatus.rejected, (state, action) => {
        state.isLoading = false;
      })

      // categories

      .addCase(getAllCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoryData = action.payload.data || [];
      })
      .addCase(getAllCategory.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default blogSlice.reducer;
