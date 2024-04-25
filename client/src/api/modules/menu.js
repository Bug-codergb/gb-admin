import request from "..";
export function getMenuListApi(params) {
  return request({
    url: "/menu/all",
    method: 'get',
    params
  })
}