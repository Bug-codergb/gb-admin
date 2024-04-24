import { defineStore } from "pinia";
const useAuthStore = defineStore({
  id: 'auth',
  state: () => {
    return {
      authMenuList: [
        {
          path: '/home/index',
          component: '/home/index',
          name: 'home',
          icon:'HomeFilled',
          meta: {
            title:"首页"
          }
        },
        {
          path: "/about/index",
          component: '/about/index',
          name: 'about',
          icon:'QuestionFilled',
          meta: {
            title:"关于"
          }
        }
      ],
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