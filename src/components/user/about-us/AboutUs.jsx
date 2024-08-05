import React from "react";
import "./aboutus.css";
import Agents from "../common/Agents";
import WhyUs from "../common/WhyUs";
import OurPartners from "../common/OurPartners";
import ReviewSlider from "../common/ReviewSlider";
import useScrollTop from "../../../hooks/useScrollTop";
const AboutUs = () => {
  const scroll = useScrollTop();
  scroll();
  return (
    <div className="about_us_main">
      <div className="about_us_bg">
        <div className="about_us_bd">
          <p className="about_us_bg_title">About Hafiz Brothers</p>
          <p className="about_us_bg_sub_title">Since 1990</p>
        </div>
      </div>
      <div className="about_us_contents">
        <div className="about_us_content">
          <div>
            <p className="about_us_content_title">
              Your Trusted Real Estate Partner Since 1990
            </p>
            <p className="about_us_message">
              Welcome to Hafiz Brothers, your trusted real estate agency in
              Lahore. Since our establishment in 1990, we have been dedicated to
              providing exceptional real estate services to our clients. With
              over three decades of experience in the industry, we have
              successfully delivered numerous projects, helping countless
              individuals and families find their dream homes and ideal
              investments.
            </p>
            <p className="about_us_message">
              At Hafiz Brothers, we pride ourselves on our commitment to
              excellence, integrity, and customer satisfaction. Our team of
              experienced professionals works tirelessly to understand your
              unique needs and provide tailored solutions that meet and exceed
              your expectations. Whether you are looking to buy, sell, or invest
              in property, we are here to guide you every step of the way.
            </p>
            <p className="about_us_message">
              Our extensive portfolio showcases a variety of successful
              projects, ranging from residential developments to commercial
              ventures. We believe in building lasting relationships with our
              clients based on trust, transparency, and a deep understanding of
              the real estate market.
            </p>
          </div>
          <div>
            <iframe
              width="100%"
              height={window.outerWidth > 420 ? "400" : "200"}
              src="https://www.youtube.com/embed/SJhRJvGK_ZM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="about_us_contents">
        <div className="about_us_content_2">
          <WhyUs />
        </div>
      </div>
      <div className="about_us_content_3">
        <Agents show={4} />
      </div>
      <div className="about_us_content_4 top_margin">
        <ReviewSlider show={2} />
      </div>

      {/* <div className="about_us_content_4">
        <p className="page_title_center">Our Partners </p>
        <p className="page_detail_center">
          We only work with the best companies around the globe
        </p>
        <div className="abour_us_parters_container">
          <OurPartners />
          <OurPartners />
          <OurPartners />
          <OurPartners />
          <OurPartners />
          <OurPartners />
          <OurPartners />
        </div>
       
      </div> */}
    </div>
  );
};

export default AboutUs;
