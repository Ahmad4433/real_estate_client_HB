import React, { useEffect } from "react";
import "./select.css";
const Select = ({ options, onChange, value, name, def }) => {
  useEffect(() => {
    if (name && value) {
      document.getElementsByName(name)[0].style.borderBlockColor = "#ccc";
    }
  }, [value]);

  return (
    <select name={name} value={value} className="ui_select" onChange={onChange}>
      <option value="" disabled>
        Select here...
      </option>
      {options?.map((item, index) => {
        return (
          <option key={index} >
            {item.title}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
