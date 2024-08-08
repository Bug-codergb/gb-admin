import React, { memo } from "react";
import { Button, Dropdown, Avatar as AntAvatar } from "antd";

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
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        退出登录
      </a>
    )
  }
];
const Avatar = () => {
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
