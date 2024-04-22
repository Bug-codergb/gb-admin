import { createRouter, createWebHashHistory } from "vue-router";
import { staticRouter } from "./modules/staticRouter";
import {initDynamicRouter } from "./modules/dynamicRouter"
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRouter],
  scrollBehavior:()=>({left:0,top:0})
})
router.beforeEach((to,from,next) => {
  initDynamicRouter();
  next()
})
initDynamicRouter()
export default router;