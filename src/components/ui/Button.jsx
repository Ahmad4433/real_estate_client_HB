import React from "react";
import './button.css'
const Button = ({children}) => {
  return <button className="ui_btn" >{children}</button>;
};

export default Button;
