import React, { useState } from "react";
import "./users.css";
import SingleUser from "./SingleUser";
import { useSelector } from "react-redux";
const Users = () => {
  const users = useSelector((state) => state.chat.users);

  return (
    <div className="users_main">
      {users?.length > 0 ? (
        users.map((item, index) => <SingleUser user={item} key={index} />)
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Users;
