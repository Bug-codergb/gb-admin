import { createRouter, createWebHashHistory } from "vue-router";
import { staticRouter } from "./modules/staticRouter";
import {initDynamicRouter } from "./modules/dynamicRouter"
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRouter],
  scrollBehavior:()=>({left:0,top:0})
})
initDynamicRouter()
export default router;