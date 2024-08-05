import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import "./singleReview.css";
const SingleReview = ({ item }) => {
  return (
    <div className="single_review_main">
      <div className="single_review_container">
        <BiSolidQuoteAltLeft className="review_icon" />
        <p className="review_message">{item?.data?.message}</p>
        <div className="review_client">
          <div className="review_client_image">
            <img src={item?.data?.image} className="review_client_img" />
          </div>
          <p className="review_client_name">{item?.data?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
