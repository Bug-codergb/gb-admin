import React from "react";
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

  console.log(loaderData);
  const handleMenu = ({ key, keyPath, domEvent }) => {
    navigate(key);
  };
  return (
    <div>
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
