import { createHashRouter } from "react-router-dom";
import { dynamicRouter } from "./dynamicRouter.jsx";
import {staticRouter} from "./staticRouter.jsx"
const router = createHashRouter([
  ...dynamicRouter,
  ...staticRouter
]);
export default router;