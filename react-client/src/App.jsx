import React from "react";
import router from "@/routers/index.js";
import { RouterProvider } from "react-router-dom";
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
