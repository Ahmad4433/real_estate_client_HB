import React, { useEffect, useState } from "react";
import SingleProperty from "../property/SingleProperty";
import { Link, useNavigate } from "react-router-dom";
import "./offerSection.css";
import useNetwork from "../../../hooks/useNetwork";
import useProvideState from "../../../hooks/useProvideState";
import { filterActions } from "../../../store/search-filter";
const OfferSection = () => {
  const { dispatch } = useProvideState();
  const { apiData, httpAction } = useNetwork();
  const { getFilteredListing } = apiData();
  const [hotList, setHotList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getHotItems = async () => {
      const result = await dispatch(
        httpAction(getFilteredListing({ isHot: true }, true))
      );
      if (result?.status) {
        setHotList(result?.list);
      }
    };

    getHotItems();
  }, []);

  const viewMoreHotHandler = () => {
    dispatch(filterActions.setFilter({ isHot: true }));
    navigate("/properties");
  };

  return (
    <div className="home_offer_bg">
      <div className="home_offer_bd"></div>
      <div className="home_offer_content">
        <div className="home_offer_col1">
          <p>Hot this week</p>
          <p>Don't miss out on our limited-time deals on top properties.</p>
       <div className='home_offer_action_container' >
       <button
            onClick={viewMoreHotHandler}
            className="home_offer_view_button"
          >
            View More
          </button>
       </div>
        </div>
        <div className="home_offer_col2">
          {hotList?.map((item, index) => (
            <SingleProperty item={item} key={index} />
          ))}
           <div className='home_offer_action_container_buttom' >
       <button
            onClick={viewMoreHotHandler}
            className="home_offer_view_button"
          >
            View More
          </button>
       </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
