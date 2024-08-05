import React from "react";
import "./propertyDetailInquery.css";
import Input from "../../ui/Input";
const PropertyDetailInquery = () => {
  return (
    <div className="property_detail_inquery_main">
      <span className="property_detail_agent_inquiry_title">Send Inquiry</span>
      <div className="property_detail_inquery_container">
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Mobile" />
        <textarea
          rows={window.outerWidth > 430 ? 10 : 5}
          placeholder="type here..."
          className="property_detail_inquery_textarea"
        />
        <button className="property_detail_inquery_btn">Send</button>
      </div>
    </div>
  );
};

export default PropertyDetailInquery;
