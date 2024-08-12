import React, { memo } from "react";
import { useOutlet } from "react-router-dom";
const Role = () => {
  const o = useOutlet();
  return <div className="card table-box">1111</div>;
};
export default memo(Role);
