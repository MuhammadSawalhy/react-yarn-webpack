import "./Button.css";
import React from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ children, background, size, onClick }) => {
  background ??= "rgb(113, 39, 211)";
  let scale = size === "large" ? 1.2 : size === "small" ? 0.8 : 1;

  return (
    <button
      className={size}
      style={{ background, "--scale": scale }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
