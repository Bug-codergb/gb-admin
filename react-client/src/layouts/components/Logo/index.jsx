import React from "react";
import * as styles from "./style.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Logo = () => {
  const isCollapse = useSelector(state => state.global.isCollapse);
  const navigate = useNavigate();
  const handleHomeRouter = () => {
    navigate("/data");
  };
  return (
    <div className={styles["logo-container"]} onClick={handleHomeRouter}>
      <img src="/logo.svg" width="40" />
      {!isCollapse && <div className={`text ${styles["logo-text"]}`}>Admin</div>}
    </div>
  );
};
export default Logo;
