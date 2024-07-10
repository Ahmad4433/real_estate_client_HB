import React from "react";
import { Rating } from "@mui/material";
import "./Singleagent.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import agentPic from "../../../assets/55.jpg";
const SingleAgent = ({ agent }) => {
  return (
    <div className="home_agent_main">
      <div className="home_agent_container">
        <div className="home_agent_image_container">
          <div className="home_agent_bd">
            <FaFacebook className="home_agent_icon" />
            <FaInstagram className="home_agent_icon" />
            <FaTwitter className="home_agent_icon" />
          </div>
          <img src={agentPic} className="home_agent_img" />
        </div>
        <div className="home_agent_detail">
          <span className="home_agent_name">Hamza</span>
          <div className="home_agent_detail_more">
            <span className="home_agent_type">Agent</span>
            <Rating size="small" defaultValue={4} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAgent;
