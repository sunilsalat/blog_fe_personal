export const CloseIcon = ({ fillColor, handleClick, customClass }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={(e) => {
        handleClick && handleClick(e);
      }}
      className={customClass}
      style={{ cursor: "pointer" }}
    >
      <circle cx="12.5" cy="12.5" r="12.5" fill={fillColor} />
      <path
        d="M17.4309 7.56641L7.5625 17.4348"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.56908 7.56641L17.4375 17.4348"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Check = ({ width, height }) => {
  return (
    <svg
      width={width ? width : "24"}
      height={height ? height : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0C5.388 0 0 5.388 0 12C0 18.612 5.388 24 12 24C18.612 24 24 18.612 24 12C24 5.388 18.612 0 12 0ZM17.652 10.452L11.652 16.452C11.412 16.68 11.112 16.8 10.8 16.8C10.488 16.8 10.188 16.68 9.94801 16.452L6.34801 12.852C5.88001 12.384 5.88001 11.616 6.34801 11.148C6.81601 10.68 7.58399 10.68 8.05199 11.148L10.8 13.9081L15.948 8.74805C16.416 8.28005 17.184 8.28005 17.652 8.74805C18.12 9.21605 18.12 9.98395 17.652 10.452Z"
        fill="#02BF90"
      />
    </svg>
  );
};

export const Error = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0C5.388 0 0 5.388 0 12C0 18.612 5.388 24 12 24C18.612 24 24 18.612 24 12C24 5.388 18.612 0 12 0ZM12 18C11.34 18 10.8 17.46 10.8 16.8C10.8 16.14 11.34 15.6 12 15.6C12.66 15.6 13.2 16.14 13.2 16.8C13.2 17.46 12.66 18 12 18ZM13.2 12C13.2 12.66 12.66 13.2 12 13.2C11.34 13.2 10.8 12.66 10.8 12V7.2C10.8 6.54 11.34 6 12 6C12.66 6 13.2 6.54 13.2 7.2V12Z"
        fill="#B11313"
      />
    </svg>
  );
};
