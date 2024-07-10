import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import client from "../../../assets/agent.jpg";
import "./singleReview.css";
const SingleReview = () => {
  return (
    <div className="single_review_main">
      <div className="single_review_container">
        <BiSolidQuoteAltLeft className="review_icon" />
        <p className="review_message">
          Excellent service from start to finish! The team made selling my
          property quick and easy, and I got a great deal. Highly recommend!"
        </p>
        <div className="review_client">
          <div className="review_client_image">
            <img src={client} className="review_client_img" />
          </div>
          <p className="review_client_name">Hamza</p>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
