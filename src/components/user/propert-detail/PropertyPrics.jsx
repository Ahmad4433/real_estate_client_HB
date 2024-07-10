import React from "react";
import "./propertyPrice.css";
const PropertyPrics = () => {
  return (
    <div className="property_price_main">
      <div>
        <p className="propert_price_title">Single Family Home</p>
        <p className="propert_price_address">
          1421 San Pedro St, Los Angeles, CA 900015
        </p>
      </div>
      <div>
        <p className="propert_price_price">
          $13000/<span>month</span>
        </p>
      </div>
    </div>
  );
};

export default PropertyPrics;
