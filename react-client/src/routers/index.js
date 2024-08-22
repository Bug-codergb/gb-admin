import { createHashRouter } from "react-router-dom";
import { staticRouter } from "./modules/staticRouter.jsx"
import { initDynamicRoutes } from "./modules/dynamicRouter.jsx";
//initDynamicRoutes(staticRouter);

const router = createHashRouter([
  ...staticRouter
]);

export default router;