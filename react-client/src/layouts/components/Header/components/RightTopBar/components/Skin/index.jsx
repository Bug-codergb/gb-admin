import React, { memo } from "react";
import { SkinOutlined } from "@ant-design/icons";
import mittBus from "@/utils/mittBus";
const Skin = () => {
  const handleShowDrawer = () => {
    mittBus.emit("openThemeDrawer");
  };
  return (
    <div style={{ cursor: "pointer" }} onClick={handleShowDrawer}>
      <SkinOutlined style={{ fontSize: "22px" }} />
    </div>
  );
};
export default memo(Skin);
