import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/home");
  };
  return (
    <div>
      <input />
      <button onClick={handleLogin}>登录</button>
    </div>
  );
};

export default Login;
