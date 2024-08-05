import React, { useEffect, useState } from "react";
import "./reviewSlider.css";
import Slider from "react-slick";
import SingleReview from "./SingleReview";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useNetwork from "../../../hooks/useNetwork";
import useProvideState from "../../../hooks/useProvideState";
const ReviewSlider = ({ show }) => {
  const settings = {
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: window.outerWidth > 430 ? show : 1,
    slidesToScrol: 1,
  };
  const [reviews, setReviews] = useState([]);

  const { dispatch } = useProvideState();
  const { apiData, httpAction } = useNetwork();
  const { getReviewList } = apiData();

  useEffect(() => {
    const getReviews = async () => {
      const result = await dispatch(httpAction(getReviewList()));
      if (result?.status) {
        setReviews(result?.list);
      }
    };

    getReviews();
  }, []);

  return (
    <div className="review_slider_main">
      <p className="page_title_center">Our Reviews</p>
      <p className="page_detail_center">
        See why our clients love working with us.
      </p>
      <div className="review_slider_container">
        <Slider {...settings}>
          {reviews?.map((item, index) => (
            <SingleReview item={item} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewSlider;
