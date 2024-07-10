import React from "react";
import "./branches.css";
import bahria from "../../../assets/bahria.jpeg";
import alkabir from "../../../assets/al kabir town.webp";
const Branches = () => {
  return (
    <div className="branch_main">
      <p className="page_title_center">Find Properties in These Towns</p>
      <p className="page_detail_center">
        Discover your ideal home in these prime locations.
      </p>
      <div className="branch_container">
        <div className="branch_item">
          <div className="branch_wide">
            <div className="branch_bd">
              <span>Bahria Town</span>
              <span>1050 Properties</span>
            </div>
            <img className="branch_wide_img" src={bahria} />
          </div>
          <div className="branch_narrow">
            <div className="branch_bd">
              <span>Al Kabir Town Pahse 2</span>
              <span>680 Properties</span>
            </div>
            <img className="branch_narrow_img" src={alkabir} />
          </div>
        </div>
        <div className="branch_item">
          <div className="branch_wide">
            <div className="branch_bd">
              <span>New Lahore City</span>
              <span>880 Properties</span>
            </div>
            <img className="branch_wide_img" src={bahria} />
          </div>
          <div className="branch_narrow">
            <div className="branch_bd">
              <span>Valencia Town</span>
              <span>1200 Properties</span>
            </div>
            <img className="branch_narrow_img" src={alkabir} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branches;
