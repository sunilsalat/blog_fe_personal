import { useForm } from "react-hook-form";
import { FEEDBACK } from "../../../constant/constant";
import styles from "./blogStatus.module.css";
import { blogStatusValidotors } from "./blogStatusValidator";
import { CloseIcon } from "../../common/svg-components";

const BlogStatusPopup = ({ handleClose, handleYes }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    handleYes(data);
  };
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={styles.container}
    >
      <CloseIcon
        customClass={styles.closeIconStyle}
        fillColor={"#02BF90"}
        handleClick={() => {
          handleClose && handleClose();
        }}
      />
      <h1 className={styles.title}>Add Feedback</h1>
      <hr className={styles.descriptionDivider} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form}>
          <div className={styles.text_feild}>
            <label htmlFor="email">Feedback</label>
            <textarea
              id="feedback"
              {...register(FEEDBACK, blogStatusValidotors[FEEDBACK])}
            />
            {errors[FEEDBACK] && (
              <span className="error">{errors[FEEDBACK].message}</span>
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
export default BlogStatusPopup;
