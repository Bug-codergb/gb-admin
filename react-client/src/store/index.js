import { getShowMenu,getFlatMenu } from "@/utils/menu.jsx";
const routes = [
  {
    title: "数据管理",
    path: "/data",
    component: "/data/index",
    id:"data",
    meta: {
      isHidden:false
    }
  },
  {
    title: "系统设置",
    path: "/setting",
    component: "/setting/index",
    id:"setting",
    meta: {
      isHidden:false
    },
    children: [
      {
        title: "角色管理",
        path: "/role",
        id:"role",
        component: "/role/index",
        meta: {
          isHidden:false
        },
      }
    ]
  },
  {
    title: "账号管理",
    path: "/account",
    component: "/setting/components/account/index",
    meta: {
      isHidden:false
    },
    id:"account",
    children: [
      {
        title: "供应商",
        path: "/vendor",
        component: "/setting/components/role/index",
        id:"vendor",
        meta: {
          isHidden: true,
          activeMenu:"/account"
        }
      }
    ]
  }
];

export const showMenuList= getShowMenu(routes)
export const flatMenuList=getFlatMenu(routes)
