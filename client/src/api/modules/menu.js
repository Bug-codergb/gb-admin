import http from "@/api";
export function getMenuListApi(params) {
  return http.get("/menu/all", params);
}
