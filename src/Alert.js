import React, { useEffect } from "react";

const Alert = ({ message, type, setAlert }) => {
  useEffect(() => {
    setTimeout(() => {
      setAlert({ ...alert, message, type, show: false });
    }, 2000);
  });
  return (
    <div>
      <p className={`alert ${type}`}>{message}</p>
    </div>
  );
};

export default Alert;
