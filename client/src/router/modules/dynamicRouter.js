import router from "@/router/index";
const modules = import.meta.glob("@/views/**/*.vue");
import useAuthStore from "../../stores/modules/auth";

export const initDynamicRouter = async () => {
 
  try {
    const authStore = useAuthStore();
    await authStore.getAuthMenuList();

    console.log(authStore.flatMenuListGet);

    
    authStore.flatMenuListGet.forEach((item) => {
      item.component = modules[`/src/views${item.component}.vue`]

      router.addRoute('layout', item);
    })
    
  } catch (e) {
    console.log(e)
  }
}