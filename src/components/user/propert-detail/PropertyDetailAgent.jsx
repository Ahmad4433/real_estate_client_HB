import React from "react";
import "./propertyDetailAgent.css";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const PropertyDetailAgent = ({ detail }) => {
  const message = `Hello dear ${detail?.user?.data?.user_name}, I am interested in this property. Please let me know more about it.\n\nHere is the link to the property: ${window.location.href}\n\nAdditional Info: Feel free to call me at any time for more details.`;

  return (
    <div className="property_detail_agent_main">
      <span className="property_detail_agent_heading">Listed By</span>
      <div className="property_detail_agent">
        <div className="property_detail_image_container">
          <img src={detail?.user?.data?.profile} />
        </div>

        <div className="property_detail_agent_content">
          <span className="property_detail_agent_name">
            {detail?.user?.data?.user_name}
          </span>
          <span className="property_detail_agent_deal_count">Deals: 225</span>
          <Rating
            size="small"
            defaultValue={Number(detail?.user?.data?.rating) || 5}
            readOnly
          />
        </div>
      </div>
      <div className="property_detail_agent_container">
        <span className="property_detail_agent_contact_title_title">
          Contact to agent
        </span>
        <div className="property_detail_agent_contact">
          <Link to={`tel:${detail?.user?.data?.mobile}`} target="_blank">
            <IoCall className="property_detail_agent_contact_icon" />
            <span className="property_detail_agent_contact_title">Call</span>
          </Link>
          <Link
            to={`https://wa.me/${
              detail?.user?.data?.whatsapp
            }?text=${encodeURIComponent(message)}`}
            target="_blank"
          >
            <FaWhatsapp className="property_detail_agent_contact_icon" />
            <span className="property_detail_agent_contact_title">
              Whatsapp
            </span>
          </Link>
          <Link to={`mailto:${detail?.user?.data?.user_email}`} target="_blank">
            <MdEmail className="property_detail_agent_contact_icon" />
            <span className="property_detail_agent_contact_title">Mail</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailAgent;
