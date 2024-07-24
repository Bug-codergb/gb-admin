import React from "react";
import { useNavigate } from "react-router-dom";
import { MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import authMenu from "@/store/index";
const items = [];
for (let item of authMenu) {
  items.push({
    key: item.path,
    label: item.title,
    icon: <MailOutlined />
  });
}

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
