import React from "react";
import "./singleMenu.css";
import { Link } from "react-router-dom";
const SingleMenu = ({ menu }) => {
  return (
    <Link to={menu?.to} className="single_menu_main">
      <span>{menu?.icon}</span>
      <span>{menu?.title}</span>
    </Link>
  );
};

export default SingleMenu; 
