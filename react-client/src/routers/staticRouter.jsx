import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

const Login = lazy(() => import("@/views/login/index.jsx"));
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
  }
];
export { staticRouter };
