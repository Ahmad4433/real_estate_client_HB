import React from "react";
import "./propertyDetailAgent.css";
import agent from "../../../assets/agent.jpg";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const PropertyDetailAgent = () => {
  return (
    <div className="property_detail_agent_main">
      <span className="property_detail_agent_heading">Listed By</span>
      <div className="property_detail_agent">
        <div className="property_detail_image_container">
          <img src={agent} />
        </div>

        <div className="property_detail_agent_content">
          <span className="property_detail_agent_name">Hamza</span>
          <span className="property_detail_agent_deal_count">Deals: 225</span>
          <Rating size="small" defaultValue={4} readOnly />
        </div>
      </div>
      <div className="property_detail_agent_container" >
        <span className="property_detail_agent_contact_title_title" >Contact to agent</span>
        <div className="property_detail_agent_contact">
          <Link>
            <IoCall className="property_detail_agent_contact_icon" />
            <span className="property_detail_agent_contact_title">Call</span>
          </Link>
          <Link>
            <FaWhatsapp className="property_detail_agent_contact_icon" />
            <span className="property_detail_agent_contact_title">
              Whatsapp
            </span>
          </Link>
          <Link>
            <MdEmail className="property_detail_agent_contact_icon" />
            <span className="property_detail_agent_contact_title">Mail</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailAgent;
