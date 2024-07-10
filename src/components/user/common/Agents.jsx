import React from "react";
import "./agents.css";
import SingleAgent from "./SingleAgent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Agents = ({show}) => {
  const settings = {
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: show,
    slidesToScrol: 1,
  };

  return (
    <div className="home_agents_main">
      <p className="page_title_center">Our Experienced Agents </p>
      <p className="page_detail_center">
        Our experienced agents are dedicated to providing you with expert
        guidance
      </p>
      <div className="home_agent_slider">
        <Slider {...settings}>
          <SingleAgent />
          <SingleAgent />
          <SingleAgent />
          <SingleAgent />
          <SingleAgent />
          <SingleAgent />
          <SingleAgent />
          <SingleAgent />
        </Slider>
      </div>
    </div>
  );
};

export default Agents;
