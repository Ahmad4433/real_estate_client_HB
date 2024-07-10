import React from "react";
import { Radio } from "@mui/material";
const SinglePropType = ({ type, value, setValue,onTypeChange }) => {
  const handleProptype = () => {
    const formatedSelected = type?.title?.toLowerCase();
    setValue(formatedSelected);
    onTypeChange(formatedSelected)
  };

  return (
    <div
      onClick={handleProptype}
      className={
        value === type?.title?.toLowerCase()
          ? "listing_type_active"
          : "listing_type_item"
      }
    >
      <span>{type?.title}</span>
      <Radio
        checked={value === type?.title?.toLowerCase()}
        size="small"
        color="success"
      />
    </div>
  );
};

export default SinglePropType;
