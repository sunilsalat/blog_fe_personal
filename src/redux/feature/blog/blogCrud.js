import axios from "axios";
import {
  ADD_BLOG,
  BLOG_FEEDBACK,
  GET_ALL_BLOG,
  GET_CATEGORY,
} from "../../../config/config";

export const addblog = (data) => {
  return axios.post(ADD_BLOG, data);
};

export const getBlogs = (data) => {
  return axios.post(GET_ALL_BLOG, data);
};

export const addFeedBack = (data) => {
  return axios.post(BLOG_FEEDBACK, data);
};

export const getCategory = (data) => {
  return axios.post(GET_CATEGORY, data);
};
