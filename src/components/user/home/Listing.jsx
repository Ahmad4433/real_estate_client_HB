import React from "react";
import SingleProperty from "../property/SingleProperty";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./listing.css";
const Listing = ({ title, type }) => {
  return (
    <section className="listing_section">
      <div className="listing_main">
        <div className="listing_more_container">
          <div className="listing_page_title"> {title}</div>
          <Link className="listing_more_section">
            <span className="listing_more_link">View more</span>
            <FiArrowUpRight />
          </Link>
        </div>
        <div className="listing_section_main">
          <SingleProperty type={type} title={title} />
          <SingleProperty type={type} title={title} />
          <SingleProperty type={type} title={title} />
          <SingleProperty type={type} title={title} />
          <SingleProperty type={type} title={title} />
          <SingleProperty type={type} title={title} />
          {/* <SingleProperty title={title} />
        <SingleProperty title={title} />
        <SingleProperty title={title} />
        <SingleProperty title={title} /> */}
        </div>
      </div>
    </section>
  );
};

export default Listing;
