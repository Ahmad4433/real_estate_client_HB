import React from "react";
import "./reviewSlider.css";
import Slider from "react-slick";
import SingleReview from "./SingleReview";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ReviewSlider = ({ show }) => {
  const settings = {
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: show,
    slidesToScrol: 1,
  };

  return (
    <div className="review_slider_main">
      <p className="page_title_center">Our Reviews</p>
      <p className="page_detail_center">
        See why our clients love working with us.
      </p>
      <div className="review_slider_container">
        <Slider {...settings}>
          <SingleReview />
          <SingleReview />
          <SingleReview />
          <SingleReview />
          <SingleReview />
          <SingleReview />
        </Slider>
      </div>
    </div>
  );
};

export default ReviewSlider;
