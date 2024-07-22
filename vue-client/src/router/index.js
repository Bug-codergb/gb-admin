import { createRouter, createWebHashHistory } from "vue-router";
import { staticRouter } from "./modules/staticRouter";
import { initDynamicRouter } from "./modules/dynamicRouter";
import useAuthStore from "../stores/modules/auth";
import NProgress from "@/config/nprogress";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRouter],
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 })
});
router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const authStore = useAuthStore();
  if (to.path === "/login") {
    return next();
  }
  if (!authStore.authMenuListGet.length) {
    await initDynamicRouter();

    return next({ ...to });
  }
  next();
});
router.afterEach(() => {
  NProgress.done();
});
export default router;
