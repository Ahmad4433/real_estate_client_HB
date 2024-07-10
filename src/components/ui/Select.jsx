import React from "react";
import "./select.css";
const Select = ({ options, onChange }) => {
  return (
    <select className="ui_select" onChange={onChange}>
      {options?.map((item, index) => {
        return <option key={index}>{item.title}</option>;
      })}
    </select>
  );
};

export default Select;
