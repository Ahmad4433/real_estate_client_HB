import React from "react";
import "./singleAgentList.css";
import agent from "../../../assets/agent.jpg";
import { Rating } from "@mui/material";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const SingleAgentList = () => {
  return (
    <div className="single_agent_list_main">
      <div className="single_agent_list_container">
        <div className="single_agent_list_image_container">
          <img src={agent} />
        </div>
        <div className="single_agent_list_content">
          <div className="single_agent_name_section" >
            <p>Hamza</p>
            <Rating defaultValue={4} readOnly size="small" />
          </div>
          <span className="single_agent_list_tag" >Agent</span>
          <span className="single_agent_list_contact" >Office: 0423555655</span>
          <span className="single_agent_list_contact" >Mobile: 0345556559</span>
          <span className="single_agent_list_contact" >Email: email@email.com</span>
          <div className="single_agent_list_links">
            <div className="single_agent_list_social" >
              <FaFacebook className="single_agent_list_social_icon" />
              <FaTwitter className="single_agent_list_social_icon" />
              <FaInstagram className="single_agent_list_social_icon" />
            </div>
            <span className="single_agent_list_more" >View My Listings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAgentList;
