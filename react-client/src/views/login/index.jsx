import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm/index";
import { HOME_URL } from "@/constant/url";
import * as style from "./style.module.scss";
import loginLeftImg from "@/assets/images/bgc.gif";
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate(HOME_URL);
  };
  return (
    <div className={`${style["login-container"]} flx-center`}>
      <div className="login-box">
        <div className="login-left">
          <img className="login-left-img" src={loginLeftImg} alt="login" />
        </div>
        <div className="login-form">
          <div className="login-logo">
            <img className="login-icon" src="/logo.svg" alt="" />
            <h2 className="logo-text">Admin System</h2>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
