import { createHashRouter } from "react-router-dom";
import { dynamicRouter } from "./dynamicRouter.jsx";
import { staticRouter } from "./staticRouter.jsx"
console.log(dynamicRouter)
const router = createHashRouter([
  ...dynamicRouter,
  ...staticRouter
]);
export default router;