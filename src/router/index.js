import { createRouter, createWebHashHistory } from "vue-router";
import { staticRouter } from "./modules/staticRouter";
import { initDynamicRouter } from "./modules/dynamicRouter"
import useAuthStore from "../stores/modules/auth";
let arr=[]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRouter],
  strict:false,
  scrollBehavior:()=>({left:0,top:0})
})
router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    return next();
  }
  if (arr.length === 0) {
    const authStore = useAuthStore();
    initDynamicRouter();
    arr=[1]
  console.log(router.getRoutes());
  ;
  return next({...to});
  }
  next();
  
})
export default router;