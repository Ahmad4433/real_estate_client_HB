import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import "./singleAmanty.css";
const SingleAmanty = ({ title, onFeatureChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleAmanty = (event) => {
    const feature = event.target.children[0].textContent?.toLowerCase();
    onFeatureChange(feature);
    setIsChecked(!isChecked);
  };

  return (
    <div
      onClick={(event) => handleAmanty(event)}
      className="single_amanty_main"
    >
      <span>{title}</span>
      <Checkbox checked={isChecked} size="small" color="success" />
    </div>
  );
};

export default SingleAmanty;
