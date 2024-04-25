import { defineStore } from "pinia";
import { getFlatMenuList } from "@/utils/index.js";
import {
  getMenuListApi
} from "../../api/modules/menu";
const useAuthStore = defineStore({
  id: 'auth',
  state: () => {
    return {
      authMenuList: [],
      authButtonList:[]
    }
  },
  getters: {
    authMenuListGet: state => state.authMenuList,
    showMenuListGet: state => state.authMenuList,
    flatMenuListGet: (state) => getFlatMenuList(state.authMenuList),
    
    authButtonListGet: state => state.authButtonList,
  },
  actions: {
    async getAuthMenuList() {
      const res = await getMenuListApi();
      this.authMenuList = res.data;
    }
  }
})
export default useAuthStore