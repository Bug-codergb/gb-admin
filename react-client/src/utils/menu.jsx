import { AppstoreOutlined } from "@ant-design/icons";
import { lazy, Suspense } from "react";
import cloneDeep from "lodash/cloneDeep";
export function formatMenu(menuList) {
  if (!Array.isArray(menuList)) {
    console.warn("menuList is not Array");
    return undefined;
  }
  let arr = [];
  for (let item of menuList) {
    arr.push({
      key: item.path,
      label: item.title,
      icon: <AppstoreOutlined />,
      children: item.children ? formatMenu(item.children) : undefined
    });
  }
  return arr;
}
export function formatRoute(menuList) {
  const ctx = require.context("@/views", true, /\.jsx$/);
  const files = ctx.keys();

  if (!Array.isArray(menuList)) {
    console.warn("menuList is not Array");
    return undefined;
  }
  let arr = [];
  for (let item of menuList) {
    const Component = lazy(() => import(`@/views${item.component}`));
    arr.push({
      path: item.path,
      element: (
        <Suspense>
          <Component />
        </Suspense>
      ),
      children: item.children && item.children.length !== 0 ? formatRoute(item.children) : undefined
    });
  }
  return arr;
}
export function handleGetShowMen(menuList) {
  if (!menuList || menuList.length === 0) {
    return [];
  }
  let newMenuList = cloneDeep(menuList);

  return newMenuList.filter(menu => {
    if (menu.children && menu.children.length !== 0) {
      menu.children = handleGetShowMen(menu.children);
    }
    return !menu.meta || (menu.meta && !menu.meta.isHidden);
  });
}
export function getShowMenu(menuList) {
  menuList = handleGetShowMen(menuList);

  const fn = menuList => {
    for (let item of menuList) {
      item.children && item.children.length === 0 && (item.children = undefined);
      if (item.children && item.children.length !== 0) {
        fn(item.children);
      }
    }
  };
  fn(menuList);
  return menuList;
}
export function getFlatMenu(menuList) {
  let arr = [];
  for (let item of menuList) {
    if (item.children && item.children.length !== 0) {
      let ret = getFlatMenu(item.children);
      arr = arr.concat(ret);
      delete item.children;
    }
    arr.push(item);
  }
  return arr;
}
