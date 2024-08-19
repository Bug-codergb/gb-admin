import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown, Avatar as AntAvatar } from "antd";
import { LOGIN_URL, HOME_URL } from "@/constant/url";
const Avatar = () => {
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          个人信息
        </a>
      )
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          修改密码
        </a>
      )
    },
    {
      key: "3",
      label: <div onClick={() => handleExit()}>退出登录</div>
    }
  ];
  const handleExit = () => {
    console.log(1);
    navigate(LOGIN_URL);
  };
  return (
    <div>
      <Dropdown menu={{ items }} placement="bottom" arrow trigger={"click"}>
        <AntAvatar style={{ backgroundColor: "#fde3cf", color: "#f56a00", cursor: "pointer" }} size={42}>
          A
        </AntAvatar>
      </Dropdown>
    </div>
  );
};
export default memo(Avatar);
