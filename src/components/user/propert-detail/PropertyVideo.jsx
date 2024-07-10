import React from "react";
import "./propertyVideo.css";
const PropertyVideo = () => {
  return (
    <div className="property_description_main">
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/SJhRJvGK_ZM"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default PropertyVideo;
