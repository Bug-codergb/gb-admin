import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

const Login = lazy(() => import("@/views/login/index.jsx"));
const Home = lazy(() => import("@/views/home/index.jsx"));
const Layout = lazy(() => import("@/layouts/index.jsx"));
const staticRouter = [
  {
    path: "/*",
    element: <div>404</div>
  },
  {
    path: "/login",
    element: (
      <Suspense>
        <Login />
      </Suspense>
    )
  },
  {
    path: "/home",
    element: (
      <Suspense>
        <Home />
      </Suspense>
    )
  },
  {
    path: "/",
    element: (
      <Suspense>
        <Layout />
      </Suspense>
    )
  }
];
export { staticRouter };
