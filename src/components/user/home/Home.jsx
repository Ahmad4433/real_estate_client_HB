import React from "react";
import "./home.css";
import Hero from "./Hero";
import Listing from "./Listing";
import OfferSection from "./OfferSection";
import Branches from "../common/Branches";
import Agents from "../common/Agents";
import WhyUs from "../common/WhyUs";
import ReviewSlider from "../common/ReviewSlider";

const Home = () => {
  return (
    <>
      <Hero />
      <Listing type="rent" title="Properties for rent" />
      <Branches />
      <Listing type="sale" title="Properties for sale" />
      <WhyUs />
      <Listing type="sale" title="Properties for sale" />
      <OfferSection />
      <Listing type="sale" title="Properties for sale" />
      <Agents show={6} />
      <Listing type="sale" title="Properties for sale" />
      <ReviewSlider show={3} />
    </>
  );
};

export default Home;
