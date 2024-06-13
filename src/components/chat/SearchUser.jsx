import React from "react";
import "./searchUser.css";
import { IoSearch } from "react-icons/io5";
const SearchUser = () => {
  return (
    <div className="searc_container">
      <div className="search_user_main">
        <input type="text" placeholder="Search here..." />
        <IoSearch className="user_search_icon" />
      </div>
    </div>
  );
};

export default SearchUser;
