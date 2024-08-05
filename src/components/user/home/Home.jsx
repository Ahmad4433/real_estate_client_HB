import React, { useState } from "react";
import "./home.css";
import Hero from "./Hero";
import Listing from "./Listing";
import OfferSection from "./OfferSection";
import Branches from "../common/Branches";
import Agents from "../common/Agents";
import WhyUs from "../common/WhyUs";
import ReviewSlider from "../common/ReviewSlider";
import useScrollTop from "../../../hooks/useScrollTop";

const Home = () => {
  const scroll = useScrollTop();
  const getHouseSale = { "data.type": "home", "data.purpose": "sale" };
  const getHouseRent = { "data.type": "home", "data.purpose": "rent" };
  const getFlatSale = { "data.type": "flat", "data.purpose": "sale" };
  const getFlatRent = { "data.type": "flat", "data.purpose": "rent" };
  const getPlots = { "data.category": "plot" };

  scroll();

  return (
    <>
      <Hero />
      <Listing
        onViewMore={getHouseSale}
        type="sale"
        title="House for sale"
        filter={getHouseSale}
      />
      <Branches />
      <Listing
        onViewMore={getHouseRent}
        type="rent"
        title="House for rent"
        filter={getHouseRent}
      />
      <WhyUs />
      <Listing
        onViewMore={getFlatSale}
        type="sale"
        title="Apartment for sale"
        filter={getFlatSale}
      />
      <OfferSection />
      <Listing
        onViewMore={getFlatRent}
        type="rent"
        title="Apartment for rent"
        filter={getFlatRent}
      />
      <Agents show={6} />
      <Listing
        onViewMore={getPlots}
        type="sale"
        title="Plots for sale"
        filter={getPlots}
      />
      <ReviewSlider show={3} />
    </>
  );
};

export default Home;
