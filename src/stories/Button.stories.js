import React from "react";
import Button from "../components/Button";

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
