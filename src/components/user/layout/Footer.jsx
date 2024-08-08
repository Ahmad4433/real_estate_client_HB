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
          <Link to="/" className="footer_link">
            Home
          </Link>
          <Link to="/about/us" className="footer_link">
            About Us
          </Link>
          <Link to="properties" className="footer_link">
            Properties
          </Link>
          <Link to="/agent/list" className="footer_link">
            Agents
          </Link>
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
          <Link
            to="https://www.facebook.com/profile.php?id=100076323705822"
            target="_blanck"
            className="footer_link"
          >
            <FaFacebook />
            <span>Facebook</span>
          </Link>
          <Link to='https://www.instagram.com/hafizbrothersestate/' target="_blanck" className="footer_link">
            <FaInstagram />
            <span>Instagram</span>
          </Link>
          {/* <Link className="footer_link">
            {" "}
            <FaTwitter />
            <span>Twitter</span>
          </Link> */}
          <Link
            to="https://www.youtube.com/@hafizbrothersestate"
            target="_blanck"
            className="footer_link"
          >
            {" "}
            <FaYoutube />
            <span>Youtube</span>
          </Link>
          <Link
            to="https://www.tiktok.com/@hafizbrothersestate"
            target="_blanck"
            className="footer_link"
          >
            <FaTiktok />
            <span>Tiktok</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
