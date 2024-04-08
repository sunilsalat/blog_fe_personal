import { useEffect, useState } from "react";
import styles from "./toast.module.css";
import { useDispatch } from "react-redux";
import { CloseIcon } from "../../svg-components";
import { clearMessage } from "../../../../redux/feature/toast/toastSlice";

const Toast = ({ type, message }) => {
  const [toast, setToast] = useState(true);
  const dispatch = useDispatch();

  const handleToast = () => {
    setToast(!toast);
    dispatch(clearMessage());
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setToast(false);
      dispatch(clearMessage());
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [dispatch]);

  return (
    // <div className={toast ? styles.notificationShow : styles.notificationHide}>
    <section className={styles.notificationShow}>
      <div className={styles.notification}>
        <div className={styles.notificationHeader}>
          <div className={styles.title}>
            <span className={styles.image}>{type.icon}</span>
            <p className={styles.notificationTitle}>{message}</p>
          </div>
          <CloseIcon
            fillColor={type.crossColor}
            handleClick={() => handleToast()}
          />
        </div>
      </div>
    </section>
  );
};

export default Toast;
