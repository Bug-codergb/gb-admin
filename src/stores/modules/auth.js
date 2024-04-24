import { defineStore } from "pinia";
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
    authButtonListGet: state => state.authButtonList,
    flatMenuListGet: (state) => {
      return [
        {
          path: '/home/index',
          component: '/home/index',
          name:'home',
          meta: {
            title:"首页"
          }
        },
        {
          path: "/about/index",
          component: '/about/index',
          name:'about',
          meta: {
            title:"关于"
          }
        }
      ]
    }
  }
})
export default useAuthStore