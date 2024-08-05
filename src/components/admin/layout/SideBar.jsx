import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoList } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import SingleMenu from "./SingleMenu";
import { MdGeneratingTokens } from "react-icons/md";
import { LuGitBranchPlus } from "react-icons/lu";

const SideBar = () => {
  return (
    <div className="admin_sidebar_main">
      <div className="admin_sidebar_logo_section">
        <h1>Logo</h1>
      </div>

      <div className="admin_sidebar_menus">
        {sidebarMenus().map((item, index) => (
          <SingleMenu menu={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
function sidebarMenus() {
  return [
    { title: "Dashboard", to: "/admin/dashboard", icon: <LuLayoutDashboard /> },
    {
      title: "Create Listing",
      to: "/admin/lising/add",
      icon: <IoIosAddCircleOutline />,
    },
    { title: "View Listing", to: "/admin/listings", icon: <IoList /> },
    { title: "Team", to: "/admin/team", icon: <RiTeamFill /> },
    { title: "Reviews", to: "/admin/reviews", icon: <MdGeneratingTokens /> },
    { title: "Branches", to: "/admin/branches", icon: <LuGitBranchPlus /> },
  ];
}
