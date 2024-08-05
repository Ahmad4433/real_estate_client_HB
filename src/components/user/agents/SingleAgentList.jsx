import React from "react";
import "./singleAgentList.css";
import agent from "../../../assets/agent.jpg";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
const SingleAgentList = ({ agent }) => {
  return (
    <div className="single_agent_list_main">
      <div className="single_agent_section" >
        <div className="single_agent_list_container">
          <div className="single_agent_list_image_container">
            <img src={agent?.data?.profile} />
          </div>
          
          <div className="single_agent_list_content">
            <div className="single_agent_name_section">
              <p>{agent?.data?.user_name}</p>
              <Rating
                defaultValue={parseInt(agent?.data?.rating)}
                readOnly
                size="small"
              />
            </div>
            <span className="single_agent_list_tag">Agent</span>
            <span className="single_agent_list_contact">
              Office: {agent?.data?.whatsapp}
            </span>
            <span className="single_agent_list_contact">
              Mobile: {agent?.data?.mobile}
            </span>
            <span className="single_agent_list_contact">
              Email: {agent?.data?.mobile}
            </span>
            <div className="single_agent_list_links">
              <div className="single_agent_list_social">
                <Link
                  style={{ textDecoration: "none" }}
                  to={agent?.data?.facebook}
                  target="_blank"
                >
                  {" "}
                  <FaFacebook className="single_agent_list_social_icon" />
                </Link>
                <Link
                  style={{ textDecoration: "none" }}
                  to={agent?.data?.insta}
                >
                  <FaInstagram
                    target="_blank"
                    className="single_agent_list_social_icon"
                  />
                </Link>
                <Link style={{ textDecoration: "none" }}>
                  <FaTiktok
                    to={agent?.data?.tiktok}
                    target="_blank"
                    className="single_agent_list_social_icon"
                  />
                </Link>
              </div>
              <span className="single_agent_list_more">View My Listings</span>
            </div>
          </div>
        </div>
        <div className="single_agent_list_links_mobile">
          <div className="single_agent_list_social">
            <Link
              style={{ textDecoration: "none" }}
              to={agent?.data?.facebook}
              target="_blank"
            >
              {" "}
              <FaFacebook className="single_agent_list_social_icon" />
            </Link>
            <Link style={{ textDecoration: "none" }} to={agent?.data?.insta}>
              <FaInstagram
                target="_blank"
                className="single_agent_list_social_icon"
              />
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <FaTiktok
                to={agent?.data?.tiktok}
                target="_blank"
                className="single_agent_list_social_icon"
              />
            </Link>
          </div>
          <span className="single_agent_list_more">View My Listings</span>
        </div>
      </div>
    </div>
  );
};

export default SingleAgentList;
