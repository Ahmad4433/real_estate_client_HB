import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import "./layout.css";
const Layout = () => {
  return (
    <div className="admin_layout_main">
      <div className="admin_layout_sidebar">
        <SideBar />
      </div>
      <div className="admin_layout_container">{<Outlet />}</div>
    </div>
  );
};

export default Layout;
