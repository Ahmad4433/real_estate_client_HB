import React from "react";
import "./ourpartners.css";
import partner from "../../../assets/partner.png";
const OurPartners = () => {
  return (
    <div className="our_partners_main">
      <div className="our_partners_container">
        <div className="our_partners_img_container">
          <img src={partner} />
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
