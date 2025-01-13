import React from "react";
import { useSelector } from "react-redux"
import { useNavigate, useLocation, useRouteLoaderData } from "react-router-dom";
import { MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { showMenuList } from "@/store/index";
import { formatMenu } from "@/utils/menu.jsx";
const items = formatMenu(showMenuList);
const ProMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const loaderData = useRouteLoaderData("vendor");

  const handleMenu = ({ key, keyPath, domEvent }) => {
    navigate(key);
  };
  const selectors = useSelector(state=>state);
  console.log(selectors)
  return (
    <div style={{ with: "100%" }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[loaderData && loaderData.activeMenu ? loaderData.activeMenu : location.pathname]}
        style={{ width: 210 }}
        items={items}
        onClick={handleMenu}
      />
    </div>
  );
};
export default ProMenu;
