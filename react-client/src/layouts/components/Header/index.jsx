import React, { memo } from "react";
import LeftTopBar from "./components/LeftTopBar";
import RightTopBar from "./components/RightTopBar";
import * as style from "./style.module.scss";

const ProHeader = () => {
  return (
    <div className={`${style["pro-header"]} flx-justify-between`}>
      <LeftTopBar />
      <RightTopBar />
    </div>
  );
};
export default memo(ProHeader);
