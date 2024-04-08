import { Navigate } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  let isLoggedin = localStorage.getItem("isLoggedin");
  if (!isLoggedin) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default AuthWrapper;
