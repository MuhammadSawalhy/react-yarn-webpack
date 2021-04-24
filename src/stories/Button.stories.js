import React from "react";
import PropTypes from "prop-types";

import Button from "../components/Button";

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

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    background: { control: "color" }
  }
};

const Template = (args) => <Button {...args}>Click me!</Button>;

export const Default = Template.bind({});

export const BlueBackground = Template.bind({});
BlueBackground.args = {
  background: "blue"
};

export const Small = Template.bind({});
Small.args = {
  size: "small"
};

export const Large = Template.bind({});
Large.args = {
  size: "large"
};
