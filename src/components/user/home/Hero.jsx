import React from "react";
import HeroHeading from "./HeroHeading";
import HeroCategories from "./HeroCategories";
import HeroFilter from "./HeroFilter";
import "./hero.css";
const Hero = () => {
  return (
    <div className="home_hero_main">
      <div className="home_hero_backdrop">
        <div className="home_hero_left">
          <HeroHeading />
          <div className="home_hero_cate_container">
            <div className="home_hero_cate_container_inner">
              What are you looking for?
            </div>
            <HeroCategories />
          </div>
        </div>
        <div className="home_hero_right">
          <HeroFilter />
        </div>
      </div>
    </div>
  );
};

export default Hero;
