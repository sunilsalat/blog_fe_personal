import { useForm } from "react-hook-form";
import styles from "./register.module.css";
import {
  CONFIRM_PASSWORD,
  EMAIL,
  NAME,
  PASSWORD,
} from "../../../constant/constant";
import { registerValidator } from "./registerValidator";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../redux/feature/auth/authAction";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const payload = {
      [NAME]: data[NAME],
      [EMAIL]: data[EMAIL],
      [PASSWORD]: data[PASSWORD],
    };
    dispatch(registerUser(payload)).then((e) => {
      if (e.type === "auth/registerUser/fulfilled") {
        navigate("/login");
      }
    });
  };
  return (
    <div className={styles.loginForm}>
      {isLoading && <div className="loading">Loading...</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form}>
          <h2>Register</h2>

          <div className={styles.text_feild}>
            <label htmlFor="fname">Name</label>
            <input
              type="text"
              id="name"
              {...register(NAME, registerValidator[NAME])}
            />
            {errors[NAME] && (
              <span className="error">{errors[NAME].message}</span>
            )}
            <label htmlFor="email"> Email</label>
            <input
              type="email"
              id="emailid"
              {...register(EMAIL, registerValidator[EMAIL])}
            />
            {errors[EMAIL] && (
              <span className="error">{errors[EMAIL].message}</span>
            )}
            <label htmlFor="password"> Password</label>
            <input
              type="password"
              id="password"
              {...register(PASSWORD, registerValidator[PASSWORD])}
            />
            {errors[PASSWORD] && (
              <span className="error">{errors[PASSWORD].message}</span>
            )}
            <label htmlFor="confirm_password"> Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              {...register(
                CONFIRM_PASSWORD,
                registerValidator[CONFIRM_PASSWORD]
              )}
            />
            {errors[CONFIRM_PASSWORD] && (
              <span className="error">{errors[CONFIRM_PASSWORD].message}</span>
            )}
          </div>
          <div className={styles.login} onClick={() => navigate('/login')}>Login ?</div>

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

export default Register;
