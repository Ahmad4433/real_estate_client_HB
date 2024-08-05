import React, { useEffect, useState } from "react";
import useValidateInput from "../../hooks/useValidateInput";
import "./textArea.css";
const TextArea = ({ row, onChange, required, placeholder, value, name }) => {
  const { blurHandler, isValid } = useValidateInput(value);
  return (
    <textarea
      name={name}
      style={{ borderColor: isValid && !value && "red" }}
      onBlur={blurHandler}
      rows={row}
      onChange={onChange}
      required={required}
      className="ui_text_area"
      placeholder={placeholder}
      value={value}
    />
  );
};

export default TextArea;
