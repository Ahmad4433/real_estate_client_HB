import React from "react";
import "./propertyAdditionalDetails.css";
import { IoCheckmarkDone } from "react-icons/io5";
const PropertAdditionalDetails = ({ detail }) => {
  return (
    <div className="property_description_main">
      <span className="propert_description_title">Property Amenties</span>
      <div className="property_details_features">
        {detail?.data?.listingFeatures?.map((item, index) => {
          return (
            <div className="property_description_amenity" key={index}>
              <span>{item}</span>
              <IoCheckmarkDone className="property_description_check" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PropertAdditionalDetails;
