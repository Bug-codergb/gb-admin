import React, { memo } from "react";
import { useSelector } from "react-redux";
import { Watermark } from "antd";
import LayoutVerical from "./LayoutVerical/index";
import ThemeDrawer from "./components/ThemeDrawer";
import * as style from "./style.module.scss";
const Layouts = () => {
  const isWatermark = useSelector(state => state.global.isWatermark);
  return (
    <div className={style["layout-container"]}>
      <Watermark content={isWatermark ? "Admin" : ""} className={style["watermark-container"]}>
        <LayoutVerical />
        <ThemeDrawer />
      </Watermark>
    </div>
  );
};
export default memo(Layouts);
