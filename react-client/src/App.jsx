import React from "react";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import router from "@/routers/index.js";
import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import "dayjs/locale/zh-cn";

import zhCN from "antd/locale/zh_CN";
dayjs.locale("zh-cn");

const App = () => {
  const primaryColor = useSelector(state => state.global.primaryColor);
  const theme = {
    token: {
      colorPrimary: primaryColor
    }
  };
  return (
    <ConfigProvider locale={zhCN} theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  );
};
export default App;
