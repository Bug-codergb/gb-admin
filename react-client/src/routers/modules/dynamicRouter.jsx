import React, { lazy, Suspense } from "react";
import authRoutes from "@/store/index";

const ctx = require.context("@/views", true, /\.jsx$/);
const files = ctx.keys();

function initDynamicRoutes(rootRoute) {
  let routes = [];
  authRoutes.forEach(item => {
    const Component = lazy(() => import(`@/views${item.component}`));
    routes.push({
      path: item.path,
      element: (
        <Suspense>
          <Component />
        </Suspense>
      )
    });
  });
  for (let item of rootRoute) {
    if (item.path === "/") {
      item.children = routes;
    }
  }
  return routes;
}
export { initDynamicRoutes };
