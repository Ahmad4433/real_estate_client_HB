import React from "react";
import "./heroFilter.css";
import Select from "../../ui/Select";
import Input from "../../ui/Input";
const HeroFilter = () => {
  const textChange = () => {};
  const options = [
    {
      title: "house",
    },

    { title: "plot" },
  ];
  return (
    <div className="hero_filter_main">
      <div className="hero_filter_inner">
        <div className="form_control_pair">
          <span>Property Type</span>
          <Select options={options} onChange={textChange} />
        </div>
        <div className="form_control_pair">
          <span>Area</span>
          <Select options={options} onChange={textChange} />
        </div>
        <div className="form_control_pair">
          <span>Location</span>
          <Select options={options} onChange={textChange} />
        </div>
        <button className="hero_filter_btn" >Search</button>
      </div>
    </div>
  );
};

export default HeroFilter;
