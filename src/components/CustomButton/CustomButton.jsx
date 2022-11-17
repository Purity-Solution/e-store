import React from "react";
import "./button.scss";

const CustomButton = ({ name, styles }) => {
  return (
    <div className="col-sm-12 login">
      <button className="button">{name}</button>
    </div>
  );
};

export default CustomButton;
