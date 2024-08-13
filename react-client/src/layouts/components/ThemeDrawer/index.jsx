import React, { memo, useState, useEffect, useCallback } from "react";
import { flushSync } from "react-dom";
import { Divider, ColorPicker, Switch } from "antd";
import * as style from "./style.module.scss";
import ProDrawer from "../../../components/ProDrawer";
import mittBus from "@/utils/mittBus";
import { useDispatch, useSelector } from "react-redux";
import { changeKeyState } from "@/store/modules/global";

import { useTheme } from "@/hooks/useTheme";
const ThemeDrawer = () => {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    mittBus.on("openThemeDrawer", () => {
      console.log("haah");
      setOpen(true);
    });
    return () => {
      mittBus.off("openThemeDrawer");
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const primaryColor = useSelector(state => state.global.primaryColor);
  const handleChangeThemeColor = e => {
    dispatch(changeKeyState({ key: "primaryColor", value: e.toHexString() }));
  };
  // 是否折叠菜单
  const isCollapse = useSelector(state => state.global.isCollapse);
  const handleCollapseMenu = e => {
    dispatch(changeKeyState({ key: "isCollapse", value: e }));
  };
  //水印
  const isWatermark = useSelector(state => state.global.isWatermark);
  const handleWatermark = e => {
    dispatch(changeKeyState({ key: "isWatermark", value: e }));
  };
  //面包屑
  const isBreadCrumb = useSelector(state => state.global.isBreadCrumb);
  const handleBreadCrumb = e => {
    dispatch(changeKeyState({ key: "isBreadCrumb", value: e }));
  };
  //暗黑模式
  const { switchDark, isDark } = useTheme();
  const handleDark = useCallback(
    async e => {
      await dispatch(changeKeyState({ key: "isDark", value: e }));
    },
    [isDark]
  );
  useEffect(() => {
    switchDark();
  }, [isDark]);
  return (
    <ProDrawer open={isOpen} onClose={handleClose} title="布局设置">
      <Divider>全局主题</Divider>
      <ul className={style["interface-settings"]}>
        <li className={"flx-justify-between"}>
          <div className="lf">主题颜色</div>
          <div className="rt">
            <ColorPicker value={primaryColor} defaultFormat={"hex"} onChange={handleChangeThemeColor} />
          </div>
        </li>

        <li className={"flx-justify-between"}>
          <div className="lf">暗黑模式</div>
          <div className="rt">
            <Switch checked={isDark} onChange={handleDark} />
          </div>
        </li>
      </ul>
      <Divider>界面设置</Divider>
      <ul className={style["interface-settings"]}>
        <li className={"flx-justify-between"}>
          <div className="lf">菜单折叠</div>
          <div className="rt">
            <Switch checked={isCollapse} onChange={handleCollapseMenu} />
          </div>
        </li>
        <li className={"flx-justify-between"}>
          <div className="lf">水印</div>
          <div className="rt">
            <Switch checked={isWatermark} onChange={handleWatermark} />
          </div>
        </li>
        <li className={"flx-justify-between"}>
          <div className="lf">面包屑</div>
          <div className="rt">
            <Switch checked={isBreadCrumb} onChange={handleBreadCrumb} />
          </div>
        </li>
      </ul>
    </ProDrawer>
  );
};
export default memo(ThemeDrawer);
