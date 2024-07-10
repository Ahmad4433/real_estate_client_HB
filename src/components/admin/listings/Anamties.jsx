import React from "react";
import "./anamties.css";
import Box from "../common/Box";
import SectionTitle from "../common/SectionTitle";
import SingleAmanty from "./SingleAmanty";

const Anamties = ({ onFeatureChange }) => {
  return (
    <Box bg="white" padding="1.6rem" radius="10px">
      <div className="anamties_main">
        <SectionTitle title="Feature and Amenities" bottom="1rem" />
        <div className="amanty_feature_container">
          <div>
            {getMainFetures().map((item, index) => (
              <SingleAmanty
                onFeatureChange={onFeatureChange}
                title={item?.title}
                key={index}
              />
            ))}
          </div>
          <div>
            {getCommunityFeatures().map((item, index) => (
              <SingleAmanty title={item?.title} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Anamties;

function getMainFetures() {
  return [
    { title: "Furnished" },
    { title: "Drawing Room" },
    { title: "Study Room" },
    { title: "Powder Room" },
    { title: "Steam Room" },
    { title: "Laundry Room" },
    { title: "Servant Quarter" },
    { title: "Store Room" },
  ];
}

function getCommunityFeatures() {
  return [
    { title: "Community Gym" },
    { title: "Community Swimming Pool" },
    { title: "Mosque" },
    { title: "School" },
    { title: "Market" },
    { title: "Hospital" },
  ];
}
