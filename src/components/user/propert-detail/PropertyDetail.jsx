import React, { useEffect } from "react";
import "./propertyDetail.css";
import ImageSlider from "./ImageSlider";
import PropertyPrics from "./PropertyPrics";
import PropertyDescription from "./PropertyDescription";
import PropertyVideo from "./PropertyVideo";
import PropertAdditionalDetails from "./PropertAdditionalDetails";
import PropertyDetailAgent from "./PropertyDetailAgent";
import PropertyDetailInquery from "./PropertyDetailInquery";
import Listing from "../home/Listing";
const PropertyDetail = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="propty_detail_section">
      <div className="property_detail_main">
        <PropertyPrics />
        <ImageSlider />
      </div>
      <div className="property_detail_parent">
        <div className="property_detail_content">
          <div className="property_detail_left">
            <PropertyDescription />
            <PropertAdditionalDetails />
            <PropertyVideo />
          </div>
          <div className="property_detail_agent_detail">
            <PropertyDetailAgent />
            <PropertyDetailInquery />
          </div>
        </div>
        <div>
          <Listing title="You may also like" type="sale" />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
