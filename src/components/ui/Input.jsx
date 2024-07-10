import React from "react";
import "./input.css";
const Input = ({ type, onChange, value, placeholder, required }) => {
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      className="ui_input"
      required={required}
      placeholder={placeholder}
    />
  );
};

export default Input;
