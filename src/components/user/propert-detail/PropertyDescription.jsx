import React, { useState } from "react";
import "./propertyDescription.css";
const PropertyDescription = () => {
  const [desExp, setDesExp] = useState(false);

  const expHandler = () => {
    setDesExp(!desExp);
  };

  return (
    <div className="property_description_main">
      <div className="propert_description_main_features">
        <span>House</span>
        <span>Beds: 3</span>
        <span>Baths: 3</span>
        <span>5: Marla</span>
      </div>
      <div className="property_deacription_decription">
        <span className="propert_description_title">Description</span>
        <p
          className={
            desExp
              ? "propert_description_detail_exp"
              : "propert_description_detail"
          }
        >
          Evans Tower very high demand corner junior one bedroom plus a large
          balcony boasting full open NYC views. You need to see the views to
          believe them. Mint condition with new hardwood floors. Lots of closets
          plus washer and dryer. Fully furnished. Elegantly appointed
          condominium unit situated on premier location. PS6. The wide entry
          hall leads to a large living room with dining area. This expansive 2
          bedroom and 2 renovated marble bathroom apartment has great windows.
          Despite the interior views, the apartments Southern and Eastern
          exposures allow for lovely natural light to fill every room. The
          master suite is surrounded by handcrafted milkwork and features
          incredible walk-in closet and storage space. Fully furnished.
          Elegantly appointed condominium unit situated on premier location.
          PS6. The wide entry hall leads to a large living room with dining
          area. This expansive 2 bedroom and 2 renovated marble bathroom
          apartment has great windows. Despite the interior views, the
          apartments Southern and Eastern exposures allow for lovely natural
          light to fill every room. The master suite is surrounded by
          handcrafted milkwork and features incredible walk-in closet and
          storage space. Fully furnished. Elegantly appointed condominium unit
          situated on premier location. PS6. The wide entry hall leads to a
          large living room with dining area. This expansive 2 bedroom and 2
          renovated marble bathroom apartment has great windows. Despite the
          interior views, the apartments Southern and Eastern exposures allow
          for lovely natural light to fill every room. The master suite is
          surrounded by handcrafted milkwork and features incredible walk-in
          closet and storage space.
        </p>
        <span
          onClick={expHandler}
          className="peopert_description_detail_action"
        >
          Show More...
        </span>
      </div>
    </div>
  );
};

export default PropertyDescription;
