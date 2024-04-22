import router from "@/router/index";
const modules = import.meta.glob("@/views/**/*.vue");
import useAuthStore from "../../stores/modules/auth";
console.log(modules);
export const initDynamicRouter = () => {
  try {
    const authStore = useAuthStore();
    authStore.flatMenuListGet.forEach((item) => {
      console.log(item);
      item.component = modules[`/src/views${item.component}.vue`]

      router.addRoute('layout', item);
    })
  } catch (e) {
    
  }
}