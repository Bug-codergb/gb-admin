import React, { memo } from "react";
import LayoutVerical from "./LayoutVerical/index";
import ThemeDrawer from "./components/ThemeDrawer";
import * as style from "./style.module.scss";
const Layouts = () => {
  return (
    <div className={style["layout-container"]}>
      <LayoutVerical />
      <ThemeDrawer />
    </div>
  );
};
export default memo(Layouts);
