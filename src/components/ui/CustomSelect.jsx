import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./customSelect.css";
const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Select");
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = () => {
    setSelectedValue("dha");
    setIsOpen(false);
  };

  return (
    <div className="custom_select_main">
      <div className="custom_select_container">
        <div onClick={handleOpen} className="custom_select">
          <span>{selectedValue}</span>
          <MdKeyboardArrowDown />
        </div>
      </div>
      <div className="custom_select_options_container">
        <div
          className={
            isOpen ? "suctom_select_options_exp" : "custom_select_options"
          }
        >
          <div className="custom_select_items">
            <span onClick={handleSelect}>{selectedValue}</span>
            <span onClick={handleSelect}>{selectedValue}</span>
            <span onClick={handleSelect}>{selectedValue}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;
