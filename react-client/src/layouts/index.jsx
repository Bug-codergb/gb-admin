import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Watermark } from "antd";
import { LOGIN_URL } from "@/constant/url.js";
import { changeRouteKeyState } from "@/store/modules/route";
import LayoutVerical from "./LayoutVerical/index";
import ThemeDrawer from "./components/ThemeDrawer";
import * as style from "./style.module.scss";
const Layouts = () => {
  const isWatermark = useSelector(state => state.global.isWatermark);

  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user || !user.token) {
      /*navigate(LOGIN_URL, {
        state: {
          from: location.pathname
        }
      });*/
    }
    return () => {
      dispatch(changeRouteKeyState({ key: "prevRoute", value: location }));
    };
  }, [location, user]);
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
