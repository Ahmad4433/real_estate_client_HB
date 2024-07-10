import React from "react";
import "./whyus.css";
import { TbBuildingCommunity } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoIosCalculator } from "react-icons/io";
const WhyUs = () => {
  return (
    <div className="why_us_main">
      <div className="why_us_section">
        <p className="page_title_center" >Why Choose Us</p>
        <p className="page_detail_center" >We provide full service at every step.</p>
        <div className="why_us_items">
          <div className="why_us_container">
            <VscWorkspaceTrusted className="why_us_icon" />
            <p className="why_us_title">Trusted By Thousands</p>
            <p className="why_us_message">
              Join the thousands of satisfied clients who have found their dream
              homes with us
            </p>
          </div>
          <div className="why_us_container">
            <TbBuildingCommunity className="why_us_icon" />
            <p className="why_us_title">Wide Renge Of Properties</p>
            <p className="why_us_message">
              Explore a diverse selection of properties that cater to every
              lifestyle and budget.
            </p>
          </div>
          <div className="why_us_container">
            <IoIosCalculator className="why_us_icon" />
            <p className="why_us_title">Financing Made Easy</p>
            <p className="why_us_message">
              Secure your dream home with our simplified financing options
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
