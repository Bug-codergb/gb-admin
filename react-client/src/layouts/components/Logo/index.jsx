import React from "react";
import * as styles from "./style.module.scss";
import { useSelector } from "react-redux";
const Logo = () => {
  const isCollapse = useSelector(state => state.global.isCollapse);
  return (
    <div className={styles["logo-container"]}>
      <img src="/logo.svg" width="40" />
      {!isCollapse && <div className={`text ${styles["logo-text"]}`}>Admin</div>}
    </div>
  );
};
export default Logo;
