import React, { memo, useState, useEffect } from "react";
import { Divider, ColorPicker } from "antd";
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
  return (
    <ProDrawer open={isOpen} onClose={handleClose} title="布局设置">
      <Divider>Text</Divider>
      <ul>
        <li className={"flx-justify-between"}>
          <div className="lf">主题颜色</div>
          <div className="rt">
            <ColorPicker value={primaryColor} defaultFormat={"hex"} onChange={handleChangeThemeColor} />
          </div>
        </li>
      </ul>
    </ProDrawer>
  );
};
export default memo(ThemeDrawer);
