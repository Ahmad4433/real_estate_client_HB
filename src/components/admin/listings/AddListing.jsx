import React, { useEffect, useState } from "react";
import "./addlisting.css";
import PageTitle from "../common/PageTitle";
import PropertyTitle from "./PropertyTitle";
import PropertyType from "./PropertyType";
import ListingBranch from "./ListingBranch";
import PricingArea from "./PricingArea";
import Anamties from "./Anamties";
import ListingImages from "./ListingImages";
import ListingUser from "./ListingUser";
import ListingYtVideo from "./ListingYtVideo";
import Button from "../../ui/Button";
import useOnchange from "../../../hooks/useOnchange";
const AddListing = () => {
  // state for features
  const [features, setFeatures] = useState([]);

  // change handlers
  const { onChangeHandler: branchChange, value: branch } = useOnchange();
  const { onChangeHandler: typeChange, value: type } = useOnchange();
  const { onChangeHandler: purposeChange, value: purpose } = useOnchange();
  const { onChangeHandler: videoUrlChange, value: videoUrl } = useOnchange();
  const { onChangeHandler: userChange, value: user } = useOnchange();
  const { onChangeHandler: priceChange, value: price } = useOnchange();
  const { onChangeHandler: areaChange, value: area } = useOnchange();
  const { onChangeHandler: unitChange, value: unit } = useOnchange();
  const { onChangeHandler: titleChange, value: title } = useOnchange();
  const { onChangeHandler: detailChange, value: detail } = useOnchange();
  const { onChangeHandler: featureChange, value: feature } = useOnchange();

  useEffect(() => {
    setFeatures((prevFeatures) => [...prevFeatures, feature]);
  }, [feature]);

  useEffect(() => {
    console.log(features);
  }, [features]);
  return (
    <div className="admin_add_listing_main">
      <div className="admin_listing_add_container">
        <div>
          <PageTitle title="Add New Property" />
        </div>
        <form>
          <div className="admin_add_listing_form_container">
            <div className="admin_add_listing_bar">
              <ListingBranch onBranchChange={branchChange} />
              <PropertyType
                onPurposeChange={purposeChange}
                onTypeChange={typeChange}
              />
              <ListingImages />
              <ListingYtVideo onUrlChange={videoUrlChange} />
              <ListingUser onUserChange={userChange} />
            </div>
            <div className="admin_add_listing_area">
              <PropertyTitle
                onTitleChange={titleChange}
                onDetailChange={detailChange}
              />
              <PricingArea
                onPriceChange={priceChange}
                onUnitChange={unitChange}
                onAreaChange={areaChange}
              />
              <Anamties onFeatureChange={featureChange} />
            </div>
          </div>
          <div className="admin_add_listing_save_action">
            <Button>Publish</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
