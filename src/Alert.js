import React, { useEffect } from "react";
//grab properties type and msg from alert state (app.js)
const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000); //3 sec timeout until alert is closed
    return () => clearTimeout(timeout);
  }, [list]);

  //css classes defined into index.css to style alert
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
