import styles from "./popup.module.css";
const Popup = ({ Children, handleClose, popData, handleYes }) => {
  return (
    <>
      <div
        className={styles.popup}
        onClick={() => handleClose && handleClose()}
      >
        <Children
          popData={popData}
          handleClose={handleClose}
          handleYes={handleYes}
        />
      </div>
    </>
  );
};

export default Popup;
