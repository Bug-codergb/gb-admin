import { defineStore } from "pinia";
import { getFlatMenuList } from "@/utils/index.js";
import { getMenuListApi } from "../../api/modules/menu";
const useAuthStore = defineStore({
  id: "auth",
  state: () => {
    return {
      authMenuList: [],
      authButtonList: [],
    };
  },
  getters: {
    authMenuListGet: (state) => state.authMenuList,
    showMenuListGet: (state) => state.authMenuList,
    flatMenuListGet: (state) => getFlatMenuList(state.authMenuList),

    authButtonListGet: (state) => state.authButtonList,
  },
  actions: {
    async getAuthMenuList() {
      //const res = await getMenuListApi();
      this.authMenuList = [
        {
          path: "/home/index",
          component: "/home/index",
          title: "首页",
          children: [],
          meta: {
            title: "首页",
          },
        },
        {
          path: "/setting/index",
          component: "/setting/index",
          title: "系统设置",
          children: [
            {
              path: "/role/index",
              component: "/role/index",
              meta: {
                title: "角色管理",
              },
            },
            {
              path: "/account/index",
              component: "/account/index",
              meta: {
                title: "账户管理",
              },
            },
          ],
          meta: {
            title: "系统设置",
          },
        },
        {
          path: "/data/index",
          component: "/data/index",
          meta: {
            title: "数据管理",
          },
        },
        {
          path: "/vendor/index",
          component: "/vendor/index",
          meta: {
            title: "供应商管理",
          },
        },
      ]; //res.data;
    },
  },
});
export default useAuthStore;
