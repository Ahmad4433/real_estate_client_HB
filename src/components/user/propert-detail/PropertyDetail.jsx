import React, { useEffect, useState } from "react";
import "./propertyDetail.css";
import ImageSlider from "./ImageSlider";
import PropertyPrics from "./PropertyPrics";
import PropertyDescription from "./PropertyDescription";
import PropertyVideo from "./PropertyVideo";
import PropertAdditionalDetails from "./PropertAdditionalDetails";
import PropertyDetailAgent from "./PropertyDetailAgent";
import PropertyDetailInquery from "./PropertyDetailInquery";
import Listing from "../home/Listing";
import { useLocation } from "react-router-dom";
import useNetwork from "../../../hooks/useNetwork";
import useProvideState from "../../../hooks/useProvideState";
const PropertyDetail = () => {
  const { dispatch } = useProvideState();
  const { apiData, httpAction } = useNetwork();
  const { getSingleListingById } = apiData();
  const [detail, setDetail] = useState();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const listingId = new URLSearchParams(location.search).get("id");
  const location = useLocation();
  useEffect(() => {
   
    // console.log(listingId)

    const getSingleListing = async () => {
      const result = await dispatch(
        httpAction(getSingleListingById(listingId))
      );
           if (result?.status) {
        setDetail(result?.list);
      }
    };
    getSingleListing();
  }, [listingId]);

  return (
    <div className="propty_detail_section">
      <div className="property_detail_main">
        <div className="property_price_mobile_detail_hide">
          <PropertyPrics detail={detail} />
        </div>
        <ImageSlider detail={detail} />
        <div className="property_price_desktop_detail_hide">
          <PropertyPrics detail={detail} />
        </div>
      </div>
      <div className="property_detail_parent">
        <div className="property_detail_content">
          <div className="property_detail_left">
            <PropertyDescription detail={detail} />
            <PropertAdditionalDetails detail={detail} />
            <PropertyVideo detail={detail} />
          </div>
          <div className="property_detail_agent_detail">
            <PropertyDetailAgent detail={detail} />
            <PropertyDetailInquery detail={detail} />
          </div>
        </div>
        <div>
          <Listing
            filter={{
              "data.type": detail?.data?.type,
              "data.purpose": detail?.data?.purpose,
            }}
            onViewMore={{
              "data.type": detail?.data?.type,
              "data.purpose": detail?.data?.purpose,
            }}
            title="You may also like"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
