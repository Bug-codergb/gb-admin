import { defineStore } from "pinia";
export const useGlobalStore = defineStore({
  id:"admin-global",
  state:()=>({
    isCollapse:false,
    breadcrumbIcon:true
  }),
  actions: {
    setGlobalState(...args) {
      this.$patch({ [args[0]]: args[1] });
    }
  },
})
