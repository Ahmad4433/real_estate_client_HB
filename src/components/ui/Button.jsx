import React from "react";
import "./button.css";
const Button = ({ children, onClick, type }) => {
  return (
    <button type={type} onClick={onClick} className="ui_btn">
      {children}
    </button>
  );
};

export default Button;
