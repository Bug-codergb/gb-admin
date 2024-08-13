import React from "react";
import { useSelector } from "react-redux";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import router from "@/routers/index.js";
import { RouterProvider } from "react-router-dom";

import "dayjs/locale/zh-cn";

import zhCN from "antd/locale/zh_CN";
dayjs.locale("zh-cn");

const App = () => {
  const primaryColor = useSelector(state => state.global.primaryColor);
  const isDark = useSelector(state => state.global.isDark);
  const theme = {
    token: {
      colorBgContainer: isDark ? "#414141" : "#ffffff",
      colorPrimary: primaryColor,
      colorText: isDark ? "#fff" : "#1d1d1d",
      colorBgElevated: isDark ? "#414141" : "#fff",
      colorSplit: isDark ? "#000000" : "rgba(5, 5, 5, 0.06)",
      colorTextPlaceholder: isDark ? "#fff" : "gba(0, 0, 0, 0.25)"
    }
  };
  return (
    <ConfigProvider locale={zhCN} theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  );
};
export default App;
