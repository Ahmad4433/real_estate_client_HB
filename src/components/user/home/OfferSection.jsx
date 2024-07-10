import React from "react";
import offerBg from "../../../assets/offer-bg.jpg";
import SingleProperty from "../property/SingleProperty";
import {Link} from 'react-router-dom'
import "./offerSection.css";
const OfferSection = () => {
  return (
    <div className="home_offer_bg">
      <div className="home_offer_bd"></div>
      <div className="home_offer_content">
        <div className="home_offer_col1">
          <p>Hot this week</p>
          <p>Don't miss out on our limited-time deals on top properties.</p>
          <Link className="home_offer_view_button">View More</Link>
        </div>
        <div className="home_offer_col2">
          <SingleProperty type='sale' title="sale" />
          <SingleProperty type='sale' title="sale" />
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
