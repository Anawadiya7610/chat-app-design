import React from "react";
import "./styles.css";
import AttachmentIcon from "@mui/icons-material/Attachment";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="type something..." />
      <div className="send">
        <AttachmentIcon className="inputIcon"/>
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <AddPhotoAlternateIcon className="inputIcon"/>
        </label>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Input;
