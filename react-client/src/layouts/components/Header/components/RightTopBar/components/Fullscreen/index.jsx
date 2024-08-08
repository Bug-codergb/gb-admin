import React, { memo, useState, useEffect } from "react";
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";
import screenfull from "screenfull";

const Fullscreen = () => {
  const [isFullscreen, setFullscreen] = useState(screenfull.isFullscreen);
  useEffect(() => {
    screenfull.on("change", () => {
      if (screenfull.isFullscreen) setFullscreen(true);
      else setFullscreen(false);
    });
  }, []);
  const handleFullScreen = () => {
    if (!screenfull.isEnabled) {
      console.log("不支持");
    }
    screenfull.toggle();
  };
  return (
    <div onClick={handleFullScreen} style={{ cursor: "pointer" }}>
      {!isFullscreen && <FullscreenOutlined style={{ fontSize: "22px" }} />}
      {isFullscreen && <FullscreenExitOutlined style={{ fontSize: "22px" }} />}
    </div>
  );
};
export default memo(Fullscreen);
