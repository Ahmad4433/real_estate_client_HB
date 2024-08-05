import React from "react";
import "./propertyPrice.css";
import amountConvert from "../../../utils/amountConver";
const PropertyPrics = ({ detail }) => {
  return (
    <div className="property_price_main">
      <div>
        <p className="propert_price_title">{detail?.data?.title}</p>
        <p className="propert_price_address">{detail?.data?.address}</p>
      </div>
      <div>
        <p className="propert_price_price">
          {amountConvert(detail?.data?.price)}
          <span>({detail?.data?.price})</span>
          {detail?.data?.purpose === "rent" && (
            <span style={{ fontSize: "14px" }}> /month</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default PropertyPrics;
