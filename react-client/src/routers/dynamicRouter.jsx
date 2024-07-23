import React, { lazy, Suspense } from "react";
import authRoutes from "@/store/index";
const ctx = require.context("../views", true, /\.jsx$/);
const files = ctx.keys();
function initDynamicRoutes() {
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
  return routes;
}
const dynamicRouter = initDynamicRoutes();
export { dynamicRouter };
