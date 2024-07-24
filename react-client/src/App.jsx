import React from "react";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import router from "@/routers/index.js";
import { RouterProvider } from "react-router-dom";

import "dayjs/locale/zh-cn";

import zhCN from "antd/locale/zh_CN";
dayjs.locale("zh-cn");

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  );
};
export default App;
