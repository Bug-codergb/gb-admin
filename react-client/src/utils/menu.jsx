import { AppstoreOutlined } from "@ant-design/icons";
import { lazy, Suspense } from "react";
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
      children: item.children ? formatRoute(item.children) : undefined
    });
  }
  return arr;
}
