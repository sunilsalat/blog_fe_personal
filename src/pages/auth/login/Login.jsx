import { useForm } from "react-hook-form";
import styles from "./login.module.css";
import { EMAIL, PASSWORD } from "../../../constant/constant";
import { loginValidators } from "./loginValidator";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/feature/auth/authAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(loginUser(data)).then((e) => {
      console.log('data', e)
      localStorage.setItem("isLoggedin", true);
      localStorage.setItem("user", JSON.stringify(e.payload.data));

      if (e.type === "auth/loginUser/fulfilled") {
        if (e.payload.data.role === "USER") {
          navigate("/manageblog");
        } else if (e.payload.data.role === "ADMIN") {
          navigate("/manageblogstatus");
        }
        else {
          navigate("/");
        }
      }
    });
  };
  return (
    <div className={styles.loginForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form}>
          <h2>Login</h2>
          <div className={styles.text_feild}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="emailid"
              {...register(EMAIL, loginValidators[EMAIL])}
            />
            {errors[EMAIL] && (
              <span className="error">{errors[EMAIL].message}</span>
            )}
            <label htmlFor="fname">Password</label>
            <input
              type="password"
              id="pwd"
              {...register(PASSWORD, loginValidators[PASSWORD])}
            />
            {errors[PASSWORD] && (
              <span className="error">{errors[PASSWORD].message}</span>
            )}
          </div>
          <div className={styles.register} onClick={() => navigate('/register')}>Register ?</div>
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
export default Login;
