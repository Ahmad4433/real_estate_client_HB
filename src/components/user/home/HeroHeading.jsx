import React from "react";
import "./heroheading.css";
import { TypeAnimation } from "react-type-animation";
const HeroHeading = () => {
  return (
    <div>
      <div className="hero_heading_main">
        <TypeAnimation
          sequence={[
            "Find Your Dream House",
            1500,
            "Find Your Dream Plot",
            1500,
            "Find Your Dream Shop",
            1500,
            "Find Your Dream Apartment",
            1500,
          ]}
          speed={20}
          repeat={Infinity}
        />
      </div>
      <div className="hero_heading_container_mobile" >
        <h2>Find Your Dream</h2>
        <div className="hero_heading_main_mobile">
          <TypeAnimation
            sequence={[
              "House",
              1500,
              "Plot",
              1500,
              "Shop",
              1500,
              "Apartment",
              1500,
            ]}
            speed={20}
            repeat={Infinity}
          />
        </div>
      </div>

      <div className="hero_message">
        Explore our exclusive listings and discover the perfect home that
        matches your lifestyle and needs.
      </div>
    </div>
  );
};

export default HeroHeading;
