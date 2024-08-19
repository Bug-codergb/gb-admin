import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_URL, HOME_URL } from "@/constant/url";
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate(HOME_URL);
  };
  return (
    <div>
      <input />
      <button onClick={handleLogin}>登录</button>
    </div>
  );
};

export default Login;
