import React from "react";
import { useNavigate } from "react-router-dom";
import { MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { showMenuList } from "@/store/index";
import { formatMenu } from "@/utils/menu.jsx";
const items = formatMenu(showMenuList);
const ProMenu = () => {
  const navigate = useNavigate();
  const handleMenu = ({ key, keyPath, domEvent }) => {
    console.log(key, keyPath);
    navigate(key);
  };
  return (
    <div>
      <Menu mode="inline" defaultSelectedKeys={["231"]} style={{ width: 210 }} items={items} onClick={handleMenu} />
    </div>
  );
};
export default ProMenu;
