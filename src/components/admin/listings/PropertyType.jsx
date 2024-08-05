import React, { useState } from "react";
import "./propertyType.css";
import { IoTimerOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { Radio } from "@mui/material";
import SectionTitle from "../common/SectionTitle";
import Box from "../common/Box";
import SinglePropType from "./SinglePropType";
const PropertyType = ({
  onTypeChange,
  onPurposeChange,
  type,
  purpose,
  onChangeCategory,
  category,
}) => {
  const [propType, setPropType] = useState(type);
  const [propCategory, setPropCategory] = useState(category);
  const [propPurpose, setPropPurpose] = useState(purpose);

  

  const handlePropType = (type) => {
    onChangeCategory(type);
    setPropCategory(type);

    // setPropType(type);
  };
  const purposeHandler = (purpose) => {
    onPurposeChange(purpose || "sale");
    setPropPurpose(purpose);
  };

  return (
    <div className="listing_type_main">
      <Box radius="12px" bg="white" padding="1.4rem">
        <SectionTitle title="Select Type" />
        <div className="listing_type_purpose_top">
          <div
            style={{
              backgroundColor: propPurpose === "rent" && "#e7f1ed",
              borderColor: propPurpose === "rent" && "seagreen",
            }}
            onClick={() => purposeHandler("rent")}
            className="listing_type_purpose"
          >
            <TfiWrite />
            <span>Rent</span>
          </div>
          <div
            onClick={() => purposeHandler("sale")}
            className="listing_type_purpose"
            style={{
              backgroundColor: propPurpose === "sale" && "#e7f1ed",
              borderColor: propPurpose === "sale" && "seagreen",
            }}
          >
            <IoTimerOutline />
            <span>Sale</span>
          </div>
        </div>
        <div className="listing_type_type">
          <div
            onClick={() => handlePropType("house")}
            className={
              propCategory === "house"
                ? "listing_type_active"
                : "listing_type_item"
            }
          >
            <span>House</span>
            <Radio
              checked={propCategory === "house"}
              size="small"
              color="success"
            />
          </div>
          <div
            className={
              propCategory === "house"
                ? "listing_type_child_exp"
                : "listing_type_child"
            }
          >
            {getHouseType().map((item, index) => (
              <SinglePropType
                value={type}
                setValue={setPropType}
                onTypeChange={onTypeChange}
                type={item}
                key={index}
              />
            ))}
          </div>

          <div></div>

          <div
            onClick={() => handlePropType("plot")}
            className={
              propCategory === "plot"
                ? "listing_type_active"
                : "listing_type_item"
            }
          >
            <span>Plot</span>
            <Radio
              checked={propCategory === "plot"}
              size="small"
              color="success"
            />
          </div>
          <div
            className={
              propCategory === "plot"
                ? "listing_type_child_exp"
                : "listing_type_child"
            }
          >
            {getPlotType().map((item, index) => (
              <SinglePropType
                value={type}
                setValue={setPropType}
                onTypeChange={onTypeChange}
                key={index}
                type={item}
              />
            ))}
          </div>

          <div
            onClick={() => handlePropType("commercial")}
            className={
              propCategory === "commercial"
                ? "listing_type_active"
                : "listing_type_item"
            }
          >
            <span>commercial</span>
            <Radio
              checked={propCategory === "commercial"}
              size="small"
              color="success"
            />
          </div>
          <div
            className={
              propCategory === "commercial"
                ? "listing_type_child_exp"
                : "listing_type_child"
            }
          >
            {getCommericlaType().map((item, index) => (
              <SinglePropType
                value={type}
                setValue={setPropType}
                onTypeChange={onTypeChange}
                key={index}
                type={item}
              />
            ))}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default PropertyType;

function getHouseType() {
  return [
    { title: "Home" },
    { title: "flat" },
    { title: "Upper Portion" },
    { title: "Lower Portion" },
  ];
}

function getPlotType() {
  return [{ title: "Residential Plot" }, { title: "commercial Plot" }];
}

function getCommericlaType() {
  return [{ title: "Office" }, { title: "Shop" }];
}
