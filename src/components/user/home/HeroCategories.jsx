import React from "react";
import "./herocategories.css";
import { BsHouse } from "react-icons/bs";
import { PiBuildingApartment } from "react-icons/pi";
import { SiOsgeo } from "react-icons/si";
import { AiOutlineShop } from "react-icons/ai";
const HeroCategories = () => {
  return (
    <div className="hero_category_main">
      <div className="hero_category_item">
        <BsHouse className="hero_cate_icon" />
        <span>Family House</span>
      </div>
      <div className="hero_category_item">
        <PiBuildingApartment className="hero_cate_icon" />
        <span>Apartment</span>
      </div>
      <div className="hero_category_item">
        <AiOutlineShop className="hero_cate_icon" />
        <span>Shop</span>
      </div>
      <div className="hero_category_item">
        <SiOsgeo className="hero_cate_icon" />
        <span>Plot</span>
      </div>
    </div>
  );
};

export default HeroCategories;
