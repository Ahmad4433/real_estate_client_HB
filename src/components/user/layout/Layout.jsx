import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./layout.css";
import { Link } from "react-router-dom";
import { RiWhatsappFill } from "react-icons/ri";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <div className="float_actions">
        <Link
          target="_blank"
          to={`https://wa.me/?text=${encodeURIComponent(
            "Hi there! I’d like to get more information about the listings on your website. Could you help me out?"
          )}`}
          style={{ textDecoration: "none" }}
        >
          <RiWhatsappFill className="float_icon" />
        </Link>
      </div>
    </>
  );
};

export default Layout;
