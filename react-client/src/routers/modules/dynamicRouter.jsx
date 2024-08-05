import { flatMenuList } from "@/store/index";
import { formatRoute } from "@/utils/menu";
function initDynamicRoutes(rootRoute) {
  let routes = formatRoute(flatMenuList);
  for (let item of rootRoute) {
    if (item.path === "/") {
      item.children = routes;
    }
  }
  return routes;
}
export { initDynamicRoutes };
