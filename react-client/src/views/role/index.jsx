import React, { memo } from "react";
import { useOutlet } from "react-router-dom";
const Role = () => {
  const o = useOutlet();
  return <div>1111</div>;
};
export default memo(Role);
