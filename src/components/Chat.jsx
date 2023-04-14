import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./styles.css";
import Messages from "./Messages";
import Input from "./Input";
function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>logo</span>
        <div className="chatIcon">
          <VideocamIcon className="iconsMeterial" />
          <PersonAddAltIcon className="iconsMeterial" />
          <MoreHorizIcon className="iconsMeterial" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
