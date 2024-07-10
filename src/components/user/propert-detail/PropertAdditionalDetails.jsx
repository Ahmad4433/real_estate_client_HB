import React from "react";
import "./propertyAdditionalDetails.css";
const PropertAdditionalDetails = () => {
  return (
    <div className="property_description_main">
      <span className="propert_description_title">Property Details</span>
      <div className="property_details_features">
        <div className="property_details_col">
          <div className="property_details_pair">
            <span className="property_details_key">Property ID</span>
            <span className="property_details_value">: HZ27</span>
          </div>
          <div className="property_details_pair">
            <span className="property_details_key">Price</span>
            <span className="property_details_value">: $130,000</span>
          </div>
          <div className="property_details_pair">
            <span className="property_details_key">Property Size</span>
            <span className="property_details_value">: 1560 Sq Ft</span>
          </div>
          <div className="property_details_pair">
            <span className="property_details_key">Year Built</span>
            <span className="property_details_value">: 2016-01-09</span>
          </div>
        </div>
        <div className="property_details_col">
          <div className="property_details_pair">
            <span className="property_details_key">Bedrooms</span>
            <span className="property_details_value">: 8</span>
          </div>
          <div className="property_details_pair">
            <span className="property_details_key">Bathrooms</span>
            <span className="property_details_value">: 4</span>
          </div>
          <div className="property_details_pair">
            <span className="property_details_key">Garage </span>
            <span className="property_details_value">: 2</span>
          </div>
          <div className="property_details_pair">
            <span className="property_details_key">Garage Size</span>
            <span className="property_details_value">: 200 SqFt</span>
          </div>
        </div>
        <div className="property_details_col">
          <div className="property_details_pair">
            <span className="property_details_key">Property Type </span>
            <span className="property_details_value">: Apartment</span>
          </div>
          <div className="property_details_pair">
            <span className="property_details_key">Property Status</span>
            <span className="property_details_value">: For Sale</span>
          </div>
        </div>
      </div>
      {/* <div className="property_details_features">
       
      </div> */}
      {/* <div className="property_details_features">
      
      </div> */}
    </div>
  );
};

export default PropertAdditionalDetails;
