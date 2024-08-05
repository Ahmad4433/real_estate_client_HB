import React from "react";
import { Rating } from "@mui/material";
import "./Singleagent.css";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const SingleAgent = ({ user }) => {
  return (
    <div className="home_agent_main">
      <div className="home_agent_container">
        <div className="home_agent_image_container">
          <div className="home_agent_bd">
            <Link
              to={user?.data?.facebook}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <FaFacebook className="home_agent_icon" />
            </Link>
            <Link
              to={user?.data?.insta}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <FaInstagram className="home_agent_icon" />
            </Link>
            <Link to={user?.data?.tiktok} style={{ textDecoration: "none" }}>
              <FaTiktok className="home_agent_icon" />
            </Link>
            <Link to={user?.data?.youtube} style={{ textDecoration: "none" }}>
              <FaYoutube className="home_agent_icon" />
            </Link>
          </div>
          <img src={user?.data?.profile} className="home_agent_img" />
        </div>
        <div className="home_agent_detail">
          <span className="home_agent_name">{user?.data?.user_name}</span>
          <div className="home_agent_detail_more">
            <span className="home_agent_type">{user?.role}</span>
            <Rating
              size="small"
              defaultValue={parseFloat(user?.data?.rating)}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAgent;
