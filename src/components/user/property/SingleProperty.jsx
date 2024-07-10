import React from "react";
import "./singleProperty.css";
import { IoLocationOutline } from "react-icons/io5";
import property from "../../../assets/prop1.jpg";
import { useNavigate } from "react-router-dom";
const SingleProperty = ({ title, type }) => {
  const navigate = useNavigate();

  const detailHandler = () => {
    navigate("/property/detail");
  };
  return (
    <div onClick={detailHandler} className="single_prop_main">
      {/* <p className="page_title_center" >{title}</p> */}
      <div className="single_prop_img_container">
        <img src={property} className="single_prop_img" />
        <div className="single_prop_container_bd">
          <span
            className={
              type === "rent"
                ? "single_prop_type_tag"
                : "single_prop_type_tag_2"
            }
          >
            {type}
          </span>
          <span className="single_prop_price">
            56933/<span className="single_prop_price_duration">month</span>
          </span>
        </div>
      </div>
      <div className="single_prop_content">
        <span className="single_prop_type">Apartment</span>
        <div className="single_prop_title">Luxury family home</div>
        <div className="single_prop_location_container">
          <IoLocationOutline className="location_icon" />
          <span className="single_prop_address">
            67 bahria town sector c lahore
          </span>
        </div>
        <div className="single_prop_anamties">
          <div className="single_prop_ginle_anamty">
            <span>Beds: 4</span>
            <span>Baths: 4</span>
            <span>Area: 5 Marla</span>
          </div>
        </div>
      </div>
      <div className="h_bar"></div>
      <div className="single_prop_agent">
        <div className="single_prop_agent_profile">
          <span className="single_prop_avatar"></span>
          <span className="single_prop_name">Hamza</span>
        </div>
      </div>
    </div>
  );
};

export default SingleProperty;
