import React, { useState } from "react";
import "./propertyDescription.css";
const PropertyDescription = ({ detail }) => {
  const [desExp, setDesExp] = useState(false);

  const expHandler = () => {
    setDesExp(!desExp);
  };

  return (
    <div className="property_description_main">
      <div className="propert_description_main_features">
        <span>{detail?.data?.type}</span>
        {detail?.data?.category !== "plot" && (
          <>
            <span>Beds: {detail?.data?.beds}</span>
            <span>Baths: {detail?.data?.baths}</span>
          </>
        )}
        <span>
          {detail?.data?.area}: {detail?.data?.unit}
        </span>
      </div>
      <div className="property_deacription_decription">
        <span className="propert_description_title">Description</span>
        <p
          className={"propert_description_detail"}
          dangerouslySetInnerHTML={{ __html: detail?.data?.detail }}
        ></p>
      </div>
    </div>
  );
};

export default PropertyDescription;
