import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer_main">
      <div className="footer_container">
        <div className="footrer_col">
          <p className="footer_link_title">About Site</p>
          <p className="footer_message">
            We’re reimagining how you buy, sell and rent. It’s now easier to get
            into a place you love. So let’s do this, together.
          </p>
        </div>
        <div className="footrer_col">
          <p className="footer_link_title">Quick Links</p>
          <Link className="footer_link">Home</Link>
          <Link className="footer_link">About Us</Link>
          <Link className="footer_link">Properties</Link>
          <Link className="footer_link">Blog</Link>
        </div>
        <div className="footrer_col">
          <p className="footer_link_title">contact Us</p>
          <Link className="footer_link">hafizbrothers@info.com</Link>
          <Link className="footer_link">10 B Commerical sector C</Link>
          <Link className="footer_link"> Bahria Town Lahore</Link>
          <Link className="footer_link"> 0320-1422222</Link>
          <Link className="footer_link"> 0321-8442695</Link>
        </div>
        <div className="footrer_col">
          <p className="footer_link_title">Follow Us</p>
          <div className="footer_follow_links"></div>
          <Link className="footer_link">
            <FaFacebook />
          </Link>
          <Link className="footer_link">
            <FaInstagram />
          </Link>
          <Link className="footer_link">
            {" "}
            <FaTwitter />
          </Link>
          <Link className="footer_link">
            {" "}
            <FaYoutube />
          </Link>
          <Link className="footer_link">
            {" "}
            <FaTiktok />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
