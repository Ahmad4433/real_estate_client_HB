import React from "react";
import "./singleProperty.css";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import useScrollTop from "../../../hooks/useScrollTop";
import amountConvert from "../../../utils/amountConver";

const SingleProperty = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollTop = useScrollTop();
  let formatedAmunt;
  if (item) {
    formatedAmunt = amountConvert(item?.data?.price);
  }

  const detailHandler = () => {
    if (location.pathname.includes("/property/detail")) {
      scrollTop();
    }

    navigate("/property/detail?id=" + item?._id);
  };
  return (
    <div onClick={detailHandler} className="single_prop_main">
      <div className="single_prop_img_container">
        <img src={item?.galary[0]} className="single_prop_img" />
        <div className="single_prop_container_bd">
          <span
            className={
              item?.data?.purpose === "rent"
                ? "single_prop_type_tag"
                : "single_prop_type_tag_2"
            }
          >
            {item?.data?.purpose}
          </span>
          <span className="single_prop_price">
            {formatedAmunt}
            <span style={{ fontSize: "14px", fontWeight: "500" }}>
              ({item?.data?.price})
            </span>
            {item?.data?.type === "rent" && (
              <span className="single_prop_price_duration">/month</span>
            )}
          </span>
        </div>
      </div>
      <div className="single_prop_content">
        <span className="single_prop_type">{item?.data?.type}</span>

        <div className="single_prop_title">{item?.data?.title}</div>
        <div className="single_prop_location_container">
          <IoLocationOutline className="location_icon" />
          <span className="single_prop_address">{item?.data?.address}</span>
        </div>
        <div className="single_prop_anamties">
          <div className="single_prop_ginle_anamty">
            {item?.data?.category !== "plot" && (
              <>
                <span>Beds: {item?.data?.beds}</span>
                <span>Baths: {item?.data?.baths}</span>
              </>
            )}
            <span>
              Area: {item?.data?.area} {item?.data?.unit}
            </span>
          </div>
        </div>
      </div>
      <div className="h_bar"></div>
      <div className="single_prop_agent">
        <div className="single_prop_agent_profile">
          <span className="single_prop_avatar">
            <img
              src={item?.user?.data?.profile}
              className="listing_agent_profile_image"
            />
          </span>
          <span className="single_prop_name">
            {item?.user?.data?.user_name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleProperty;
