import React from "react";
import "./button.scss";

const CustomButton = ({ name, className }) => {
  return <button className={`button ${className}`}>{name}</button>;
};

export default CustomButton;
