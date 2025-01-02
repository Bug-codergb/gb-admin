import { defineStore } from "pinia";
import { DEFAULT_PRIMARY } from "@/config";
import piniaPersistConfig from "@/stores/helper/persist";
export const useGlobalStore = defineStore({
  id: "admin-global",
  state: () => ({
    iconList: [],
    isCollapse: false,
    breadcrumbIcon: true,
    // 深色模式
    isDark: false,
    // 灰色模式
    isGrey: false,
    // 色弱模式
    isWeak: false,
    //主题颜色
    primary: DEFAULT_PRIMARY,
    layout: "vertical",
    // 侧边栏反转
    asideInverted: false,
    // 头部反转
    headerInverted: false
  }),
  actions: {
    setGlobalState(...args) {
      this.$patch({ [args[0]]: args[1] });
    }
  },
  persist: piniaPersistConfig("admin-global")
});
