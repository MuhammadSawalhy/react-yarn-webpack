import "./Button.css";
import React from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ children, background, size, onClick }) => {
  background ??= "rgb(113, 39, 211)";
  return (
    <button className={size} style={{ background }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
