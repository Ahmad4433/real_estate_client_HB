import React from "react";
import "./herocategories.css";
import { BsHouse } from "react-icons/bs";
import { PiBuildingApartment } from "react-icons/pi";
import { SiOsgeo } from "react-icons/si";
import { AiOutlineShop } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useProvideState from "../../../hooks/useProvideState";
import { filterActions } from "../../../store/search-filter";
const HeroCategories = () => {
  const { dispatch } = useProvideState();
  const navigate = useNavigate();

  const navigateToPropertiesHandler = (filter) => {
    dispatch(filterActions.setFilter(filter));
    navigate("/properties");
  };

  return (
    <div className="hero_category_main">
      <div
        onClick={() => navigateToPropertiesHandler({ "data.type": "home" })}
        className="hero_category_item"
      >
        <BsHouse className="hero_cate_icon" />
        <span>Family House</span>
      </div>
      <div
        onClick={() =>
          navigateToPropertiesHandler({ "data.type": "flat" })
        }
        className="hero_category_item"
      >
        <PiBuildingApartment className="hero_cate_icon" />
        <span>Apartment</span>
      </div>
      <div
        onClick={() => navigateToPropertiesHandler({ "data.type": "shop" })}
        className="hero_category_item"
      >
        <AiOutlineShop className="hero_cate_icon" />
        <span>Shop</span>
      </div>
      <div
        onClick={() => navigateToPropertiesHandler({ "data.category": "plot" })}
        className="hero_category_item"
      >
        <SiOsgeo className="hero_cate_icon" />
        <span>Plot</span>
      </div>
    </div>
  );
};

export default HeroCategories;
