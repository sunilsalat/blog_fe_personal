import createAsyncThunkForSlice from "../../../utils";
import { addFeedBack, addblog, getBlogs, getCategory } from "./blogCrud";

export const addNewBlog = createAsyncThunkForSlice("blog/addNewBlog", addblog, {
  isToast: true,
});

export const getAllAdminBlog = createAsyncThunkForSlice(
  "blog/getAllAdminBlog",
  getBlogs
);

export const blogStatus = createAsyncThunkForSlice(
  "blog/blogStatus",
  addFeedBack,
  {
    isToast: true,
  }
);

export const getAllCategory = createAsyncThunkForSlice(
  "blog/getAllCategory",
  getCategory
);
