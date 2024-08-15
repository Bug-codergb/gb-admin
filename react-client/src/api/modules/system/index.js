import http from "../../index";
export function get() {
  return http.get("/")
}