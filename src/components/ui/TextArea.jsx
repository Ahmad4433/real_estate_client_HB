import React from "react";
import "./textArea.css";
const TextArea = ({ row, onChange, required, placeholder }) => {
  return (
    <textarea
      rows={row}
      onChange={onChange}
      required={required}
      className="ui_text_area"
      placeholder={placeholder}
    />
  );
};

export default TextArea;
