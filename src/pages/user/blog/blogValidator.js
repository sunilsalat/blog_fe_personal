import {
  BLOG_CATEGORY,
  BLOG_DESC,
  BLOG_IMAGE,
  BLOG_TITLE,
} from "../../../constant/constant";

export const blogValidators = {
  [BLOG_TITLE]: {
    required: "Please enter title",
  },
  [BLOG_DESC]: {
    required: "Please enter description",
  },
  [BLOG_CATEGORY]: {
    required: "Please select category",
  },
  [BLOG_IMAGE]: {
    required: "Please select blog images",
  },
};
