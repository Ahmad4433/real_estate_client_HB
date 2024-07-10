import React from "react";
import "./shop.css";
import SingleProperty from "../property/SingleProperty";
import shopImg from "../../../assets/shop.jpg";
import Select from "../../ui/Select";
import { Slider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Input from "../../ui/Input";
const Shop = () => {
  const options = [
    { title: "bahria" },
    { title: "bahria" },
    { title: "bahria" },
    { title: "bahria" },
  ];

  return (
    <div className="shop_main">
      <div className="shop_header">
        <div className="shop_bd">
          <p> Find Your Perfect Property</p>
          <p>
            Explore our extensive listings and find the property that suits your
            needs.
          </p>
        </div>
        <img src={shopImg} />
      </div>
      <div className="shop_container">
        <div className="shop_filter_bar">
          <div className="shop_filter_bar_sticky" >
            <p className="shop_filter_bar_heading">Select Creteria</p>
            <div className="shop_drop_down">
              <div className="shop_filter_pair">
                <span className="shop_filter_lbl">Select Location</span>
                <Select options={options} />
              </div>
              <div className="shop_filter_pair">
                <span className="shop_filter_lbl">Select Location</span>
                <Select options={options} />
              </div>
              <div className="shop_filter_pair">
                <span className="shop_filter_lbl">Select Location</span>
                <Select options={options} />
              </div>
              <div className="shop_filter_pair">
                <span className="shop_filter_lbl">Select Location</span>
                <Select options={options} />
              </div>
            </div>
            <p className="shop_filter_bar_heading">Enter Price Range</p>

            <div className="shop_drop_down">
              <div className="shop_filter_pair">
                <span className="shop_filter_lbl">From Price</span>
                <input placeholder="From" />
              </div>
              <div className="shop_filter_pair">
                <span className="shop_filter_lbl">To Price</span>
                <input placeholder="To" />
              </div>
              <button className="shop_filter_search_action">Search</button>
            </div>
          </div>
        </div>
        <div className="shop_listing">
          <div className="shop_listing_item">
            <SingleProperty type="sale" />
            <SingleProperty type="sale" />
            <SingleProperty type="sale" />
            <SingleProperty type="sale" />
            <SingleProperty type="rent" />
            <SingleProperty type="rent" />
            <SingleProperty type="rent" />
            <SingleProperty type="rent" />
            <SingleProperty type="rent" />
            <SingleProperty type="sale" />
            <SingleProperty type="sale" />
            <SingleProperty type="sale" />
            <SingleProperty type="sale" />
            <SingleProperty type="sale" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
