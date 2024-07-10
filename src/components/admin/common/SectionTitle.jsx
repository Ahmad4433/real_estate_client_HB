import React from "react";
import "./sectionTitle.css";
const SectionTitle = ({ title, bottom }) => {
  return (
    <div style={{ marginBottom: bottom }} className="ui_section_title">
      {title}
    </div>
  );
};

export default SectionTitle;
