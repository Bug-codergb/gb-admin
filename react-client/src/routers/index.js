import { createHashRouter } from "react-router-dom";
import { staticRouter } from "./modules/staticRouter.jsx"
import { initDynamicRoutes } from "./modules/dynamicRouter.jsx";
initDynamicRoutes(staticRouter);

const router = createHashRouter([
  ...staticRouter
]);
console.log(router)
export default router;