import React from "react";

function Message() {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>hello brother</p>
        <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
      </div>
    </div>
  );
}

export default Message;
