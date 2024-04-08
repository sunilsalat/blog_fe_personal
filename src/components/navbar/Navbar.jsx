import React from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { navData } from "../../constant/data";
import { logoutUser } from "../../redux/feature/auth/authAction";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedin = localStorage.getItem("isLoggedin");
  const user = localStorage.getItem("user");
  console.log("use", user);
  const handleNavigate = (item) => {
    navigate(item.link);
  };
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.logoImg}>
          <img
            src="./img/Blogger-Logo.png"
            alt=""
            onClick={() => {
              navigate("/");
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div>
          <ul className={styles.menuBar}>
            {isLoggedin && user ? (
              <>
                <li
                  className={styles.menu}
                  onClick={() => {
                    JSON.parse(user).role === "USER"
                      ? navigate("/manageblog")
                      : JSON.parse(user).role === "ADMIN" ? navigate("/manageblogstatus") : navigate('/');
                  }}
                >
                  Manage Blog
                </li>
                <li
                  className={styles.menu}
                  onClick={() => {
                    dispatch(logoutUser()).then((e) => {
                      if (e.type === "auth/logoutUser/fulfilled") {
                        localStorage.clear();
                        navigate("/");
                        dispatch({ type: "RESET_STATE" });
                      }
                    });
                  }}
                >
                  Logout
                </li>
              </>
            ) : (
              navData.map((item, index) => {
                return (
                  <li
                    className={styles.menu}
                    key={index}
                    onClick={() => handleNavigate(item)}
                  >
                    {item.name}
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
