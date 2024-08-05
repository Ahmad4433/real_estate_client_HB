import React, { useEffect, useState } from "react";
import SingleProperty from "../property/SingleProperty";
import { FiArrowUpRight } from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useNetwork from "../../../hooks/useNetwork";
import useProvideState from "../../../hooks/useProvideState";
import "./listing.css";
import useScrollTop from "../../../hooks/useScrollTop";
import { filterActions } from "../../../store/search-filter";
const Listing = ({ title, type, filter, onViewMore }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { dispatch, useSelector } = useProvideState();
  const { apiData, httpAction } = useNetwork();
  const { getFilteredListing } = apiData();



  useEffect(() => {
    const filteredListng = async () => {
      const result = await dispatch(httpAction(getFilteredListing(filter)));
      if (result?.status) {
        setData(result?.list);
      }
    };

    filteredListng();
  }, [filter]);

  const viewMoreHandler = () => {
    dispatch(filterActions.setFilter(onViewMore));
    navigate("/properties");
  };

  return (
    <section className="listing_section">
      <div className="listing_main">
        <div className="listing_more_container">
          <div className="listing_page_title"> {title}</div>
          <div onClick={viewMoreHandler} className="listing_more_section">
            <span className="listing_more_link">View more</span>
            <FiArrowUpRight />
          </div>
        </div>
        <div className="listing_section_main">
          {data?.map((item, index) => (
            <SingleProperty item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Listing;
