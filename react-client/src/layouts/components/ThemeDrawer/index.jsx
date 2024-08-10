import React, { memo, useState, useEffect } from "react";
import { Divider, ColorPicker, Switch } from "antd";
import ProDrawer from "../../../components/ProDrawer";
import mittBus from "@/utils/mittBus";
import { useDispatch, useSelector } from "react-redux";
import { changeKeyState } from "@/store/modules/global";

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

  const isCollapse = useSelector(state => state.global.isCollapse);
  const handleCollapseMenu = e => {
    dispatch(changeKeyState({ key: "isCollapse", value: e }));
  };
  return (
    <ProDrawer open={isOpen} onClose={handleClose} title="布局设置">
      <Divider>全局主题</Divider>
      <ul>
        <li className={"flx-justify-between"}>
          <div className="lf">主题颜色</div>
          <div className="rt">
            <ColorPicker value={primaryColor} defaultFormat={"hex"} onChange={handleChangeThemeColor} />
          </div>
        </li>
      </ul>
      <Divider>界面设置</Divider>
      <ul>
        <li className={"flx-justify-between"}>
          <div className="lf">菜单折叠</div>
          <div className="rt">
            <Switch checked={isCollapse} onChange={handleCollapseMenu} />
          </div>
        </li>
      </ul>
    </ProDrawer>
  );
};
export default memo(ThemeDrawer);
