import React from "react";
import "./propertyFeatures.css";
import { IoCheckmark } from "react-icons/io5";
const PropertyFeatures = () => {
  return (
    <div className="property_feature_main">
      <div className="property_feature_row">
        <div className="property_feature_col">
          <div className="prtoperty_feature_pair">
            <IoCheckmark className="property_feature_icon" />
            <span className="property_feature_feature">Air Conditioning</span>
          </div>
          <div className="prtoperty_feature_pair">
            <IoCheckmark className="property_feature_icon" />
            <span className="property_feature_feature">Barbeque</span>
          </div>
          <div className="prtoperty_feature_pair">
            <IoCheckmark className="property_feature_icon" />
            <span className="property_feature_feature">Dryer</span>
          </div>
          <div className="prtoperty_feature_pair">
            <IoCheckmark className="property_feature_icon" />
            <span className="property_feature_feature">Gym</span>
          </div>
          <div className="prtoperty_feature_pair">
            <IoCheckmark className="property_feature_icon" />
            <span className="property_feature_feature">Laundry</span>
          </div>
        </div>
        <div className="property_feature_col">
          <div className="prtoperty_feature_pair">
            <IoCheckmark className="property_feature_icon" />
            <span className="property_feature_feature">Air Conditioning</span>
          </div>
          <div className="prtoperty_feature_pair">
            <IoCheckmark className="property_feature_icon" />
            <span className="property_feature_feature">Barbeque</span>
          </div>
          <div className="prtoperty_feature_pair">
            <IoCheckmark className="property_feature_icon" />
            <span className="property_feature_feature">Dryer</span>
          </div>
          <div className="prtoperty_feature_pair">
            <IoCheckmark className="property_feature_icon" />
            <span className="property_feature_feature">Gym</span>
          </div>
          <div className="prtoperty_feature_pair">
            <IoCheckmark className="property_feature_icon" />
            <span className="property_feature_feature">Laundry</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFeatures;
