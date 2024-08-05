import React, { useState,  useEffect } from "react";
import { Checkbox } from "@mui/material";
import "./singleAmanty.css";
const SingleAmanty = ({
  title,
  onFeatureChange,
  index,
  setFeatures,
  features,
}) => {


  // console.log(features)


  const [isChecked, setIsChecked] = useState(false);
  const handleAmanty = (event) => {
    setIsChecked(!isChecked);
  };

useEffect(()=>{

setIsChecked(features?.includes(title))

},[])

  useEffect(() => {
    if (isChecked) {
      setFeatures((prevFeature) => [...prevFeature, title]);
    } else {
      setFeatures((prevFeature) => {
        return prevFeature?.filter((item) => item !== title);
      });
    }
  }, [isChecked]);

  return (
    <div
      onClick={(event) => handleAmanty(event)}
      className="single_amanty_main"
    >
      <div className="single_amenity_wrapper"></div>
      <span>{title}</span>
      <Checkbox
        name={title}
        className="single_amenty_check"
        checked={isChecked }
        size="small"
        color="success"
      />



    </div>
  );
};

export default SingleAmanty;


