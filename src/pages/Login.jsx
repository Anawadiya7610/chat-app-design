import React from "react";
import "./styles.css";

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <from>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
         
          <button>Login</button>
        </from>
        <p>You do't have an account? Regester</p>
      </div>
    </div>
  );
}

export default Login;
