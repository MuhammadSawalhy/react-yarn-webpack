import "./Button.css";
import React from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ children, ...others }) => {
  return <button {...others}>{children}</button>;
};

export default Button;
