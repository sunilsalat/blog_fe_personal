import React from "react";
import {
  BLOG_CATEGORY,
  BLOG_DESC,
  BLOG_IMAGE,
  BLOG_TITLE,
} from "../../../constant/constant";
import styles from "./addBlog.module.css";
import { blogValidators } from "./blogValidator";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNewBlog } from "../../../redux/feature/blog/blogAction";
import { useNavigate } from "react-router-dom";
const AddBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoryData, isLoading } = useSelector(
    (state) => state.blog
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append(BLOG_TITLE, data[BLOG_TITLE]);
    formData.append(BLOG_DESC, data[BLOG_DESC]);
    formData.append(BLOG_CATEGORY, data[BLOG_CATEGORY]);
    formData.append(BLOG_IMAGE, data[BLOG_IMAGE][0]);

    dispatch(addNewBlog(formData)).then((e) => {
      if (e.type === "blog/addNewBlog/fulfilled") {
        reset();
        navigate("/");
      }
    });
  };
  return (
    <div className={styles.loginForm}>
      {isLoading && <div className="loading">Loading...</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form}>
          <h2>Add New Blog</h2>
          <div className={styles.text_feild}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              {...register(BLOG_TITLE, blogValidators[BLOG_TITLE])}
            />
            {errors[BLOG_TITLE] && (
              <span className="error">{errors[BLOG_TITLE].message}</span>
            )}
            <label htmlFor="descripton">Description</label>
            <textarea
              id="description"
              {...register(BLOG_DESC, blogValidators[BLOG_DESC])}
            />
            {errors[BLOG_DESC] && (
              <span className="error">{errors[BLOG_DESC].message}</span>
            )}
            <label htmlFor="descripton">Category</label>
            <select
              className={styles.selectInputField}
              {...register(BLOG_CATEGORY, blogValidators[BLOG_CATEGORY])}
            >
              <option value="">Select Category</option>
              {categoryData.map((item, i) => {
                return (
                  <React.Fragment key={i}>
                    <option value={item?._id}>{item?.name}</option>
                  </React.Fragment>
                );
              })}
            </select>
            {errors[BLOG_CATEGORY] && (
              <span className="error">{errors[BLOG_CATEGORY].message}</span>
            )}
            <label htmlFor="descripton">Images</label>
            <input
              type="file"
              id="file"
              accept=".jpg, .jpeg, .png, .svg"
              {...register(BLOG_IMAGE, blogValidators[BLOG_IMAGE])}
            />
            {errors[BLOG_IMAGE] && (
              <span className="error">{errors[BLOG_IMAGE].message}</span>
            )}
          </div>
          <div className={styles.submit_btn}>
            <button type="submit" id="submitbtn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddBlog;
