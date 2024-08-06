import React, { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { changeKeyState } from "@/store/modules/global";

import { Breadcrumb } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { routes } from "@/store/index.js";
import { getMenuBreadcrumb } from "@/utils/menu.jsx";
import * as style from "./style.module.scss";

let breadCrumbMap = getMenuBreadcrumb(routes);
const LeftTopBar = () => {
  const location = useLocation();
  const [breadCrumb, setBreadCrumb] = useState([]);
  useEffect(() => {
    setBreadCrumb(breadCrumbMap[location.pathname] || []);
  }, [location.pathname]);

  const isCollapse = useSelector(state => state.global.isCollapse);
  const dispatch = useDispatch();

  const handleCollapse = () => {
    dispatch(changeKeyState({ key: "isCollapse", value: !isCollapse }));
  };
  return (
    <div className={`${style["left-top-bar"]} flx-center`}>
      <div className={style["collapse"]} onClick={handleCollapse}>
        {!isCollapse && <MenuFoldOutlined />}
        {isCollapse && <MenuUnfoldOutlined />}
      </div>
      <Breadcrumb
        items={breadCrumb.map(item => {
          return {
            href: `#${item.path}`,
            title: item.title
          };
        })}
      />
    </div>
  );
};
export default memo(LeftTopBar);
