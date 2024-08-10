import React, { memo } from "react";
import { Space } from "antd";
import Avatar from "./components/Avatar/index";
import Fullscreen from "./components/Fullscreen";
import Skin from "./components/Skin/index";
import * as style from "./style.module.scss";
const RightTopBar = () => {
  return (
    <div className={`${style["right-top-bar"]} flx-center`}>
      <Space size="large">
        <Skin />
        <Fullscreen />
        <Avatar />
      </Space>
    </div>
  );
};
export default memo(RightTopBar);
