import { getShowMenu,getFlatMenu } from "@/utils/menu.jsx";
const routes = [
  {
    title: "数据管理",
    path: "/data",
    component: "/data/index",
    meta: {
      isHidden:false
    }
  },
  {
    title: "系统设置",
    path: "/setting",
    component: "/setting/index",
    meta: {
      isHidden:false
    },
    children: [
      {
        title: "角色管理",
        path: "/role",
        component: "/role/index",
        meta: {
          isHidden:false
        },
        children: [
          {
            title: "账号管理",
            path: "/account",
            component: "/setting/components/account/index",
            meta: {
              isHidden:true
            }
          }
        ]
      }
    ]
  }
];

export const showMenuList= getShowMenu(routes)
export const flatMenuList=getFlatMenu(routes)
