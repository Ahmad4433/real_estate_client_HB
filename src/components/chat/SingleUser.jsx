import React from "react";
import "./singleUser.css";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../../store/chat-slice";

const SingleUser = ({ user }) => {
  const sender = useSelector((state) => state.chat.sender);
  const dispatch = useDispatch();
  const socket = useSelector((state) => state.socket.socket);
  const selectedHandler = () => {
    dispatch(chatActions.setSelected(user));
    socket.emit("onSelect", { senderId: sender, receiverId: user?._id });
  };

  return (
    <div className="single_user_main">
      <div onClick={selectedHandler} className="user_name">
        <div className="user_online_detail">
          <span> {user?.name}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
