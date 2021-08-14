import React from "react";
import PropTypes from "prop-types";
import classes from "./Button.module.scss";

// eslint-disable-next-line react/prop-types
const Button = ({ children, background, size, onClick }) => {
  background ??= "rgb(113, 39, 211)";
  let scale = size === "large" ? 1.2 : size === "small" ? 0.8 : 1;
  const className = `${classes["btn"]}`;

  return (
    <button
      className={className}
      style={{ background, "--scale": scale }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   * What background color to use
   */
  background: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func
};

export default Button;
