import React from "react";
import "./formPair.css";
const FormPair = ({ children,bottom }) => {
  return <div style={{marginBottom:bottom}} className="ui_form_pair">{children}</div>;
};

export default FormPair;
