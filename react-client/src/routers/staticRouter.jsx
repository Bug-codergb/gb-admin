import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

const Login = lazy(() => import("@/views/login/index.jsx"));
const Home = lazy(() => import("@/views/home/index.jsx"));
const LayoutVerical = lazy(() => import("@/layouts/LayoutVerical/index.jsx"));
const staticRouter = [
  {
    path: "/*",
    element: <div>404</div>
  },
  {
    path: "/",
    element: <Navigate to="/login" />
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
    path: "/layout",
    element: (
      <Suspense>
        <LayoutVerical />
      </Suspense>
    )
  }
];
export { staticRouter };
