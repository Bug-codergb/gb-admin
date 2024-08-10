import React, { memo } from "react";
import { Watermark } from "antd";
import LayoutVerical from "./LayoutVerical/index";
import ThemeDrawer from "./components/ThemeDrawer";
import * as style from "./style.module.scss";
const Layouts = () => {
  return (
    <div className={style["layout-container"]}>
      <Watermark content="Admin" className={style["watermark-container"]}>
        <LayoutVerical />
        <ThemeDrawer />
      </Watermark>
    </div>
  );
};
export default memo(Layouts);
