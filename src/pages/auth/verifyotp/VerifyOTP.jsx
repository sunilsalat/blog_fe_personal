import { useForm } from "react-hook-form";
import styles from "./verifyotpfile.module.css";
import { OTP } from "../../../constant/constant";
import { verifyOTPValidator } from "./verifyotpValidator";

const VerifyOTP = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
  };
  return (
    <div className={styles.loginForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form}>
          <h2>Verify OTP</h2>
          <div className={styles.text_feild}>
            <label htmlhtmlFor="otp">Verify OTP</label>
            <input
              type="text"
              id="otp"
              {...register(OTP, verifyOTPValidator[OTP])}
            />
            {errors[OTP] && (
              <span className="error">{errors[OTP].message}</span>
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

export default VerifyOTP;
