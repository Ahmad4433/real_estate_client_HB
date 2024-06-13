import React, { useEffect, useState } from "react";
import "./message.css";
import { IoMdSend } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { IoArrowBack } from "react-icons/io5";
import { chatActions } from "../../store/chat-slice";
import { messageActions } from "../../store/message-slice";
const Message = () => {
  const [online, setOnline] = useState(null);
  const socket = useSelector((state) => state.socket.socket);
  const [message, setMessage] = useState("");
  const user = useSelector((state) => state.chat.selectedUser);
  const sender = useSelector((state) => state.chat.sender);
  const conversion = useSelector((state) => state.message.conversion);
  const dispatch = useDispatch();
  const removeUserHandler = () => {
    dispatch(chatActions.setSelected(null));
    dispatch(messageActions.setConversion([]));
  };

  const messageChange = (event) => {
    setMessage(event.target.value);
  };

  const sendHandler = () => {
    if (socket) {
      socket.emit("message", {
        senderId: sender,
        receiverId: user?._id,
        message: message,
      });
    }

    setMessage("");
  };

  useEffect(() => {
    socket.on("online", (status) => {
      setOnline(status);
    });
  }, []);

  useEffect(() => {
    socket.on("conversion", (chat) => {
      if (chat) {
        dispatch(messageActions.setConversion(chat[0]?.message));
      }
    });
  }, [user]);

  return (
    <div className="message_main">
      <div className="user_chat_selected">
        <IoArrowBack onClick={removeUserHandler} className="chat_back_icon" />
        <div className="user_status_bar">
          <span className="user_status_name">{user?.name}</span>
          <span className="user_status">{online ? "Onlie" : "Offline"}</span>
        </div>
      </div>
      <div className="messages">
        {conversion?.length > 0 ? (
          conversion.map((item, index) => {
            return (
              <span
                className={item?.sender === sender ? "sender" : "receiver"}
                key={index}
              >
                {item?.message}
              </span>
            );
          })
        ) : (
          <div></div>
        )}
      </div>

      <div className="message_controll">
        <input
          onChange={messageChange}
          className="message_input"
          type="text"
          value={message}
          placeholder="type here..."
        />
        <IoMdSend onClick={sendHandler} className="message_send_icon" />
      </div>
    </div>
  );
};

export default Message;
