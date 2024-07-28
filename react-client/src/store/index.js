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
    path: "setting",
    component: "/setting/index",
    meta: {
      isHidden:false
    },
    children: [
      {
        title: "角色管理",
        path: "/setting/role",
        component: "/role/index",
        meta: {
          isHidden:false
        }
      }
    ]
  }
];
export default routes;