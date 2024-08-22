import axios from "axios";
 import router from "@/routers/index.js";
import { RESPONSE_CODE } from "../constant/enum";
import { LOGIN_URL } from "@/constant/url.js"

const config = {
  // 默认地址请求地址，可在 .env.** 文件中修改
  baseURL: process.env.API_URL ,
  // 设置超时时间
  timeout: 10000,
  // 跨域时候允许携带凭证
  withCredentials: true
};

class RequestHttp{
  constructor(config) {
    this.service = axios.create(config);
    this.service.interceptors.request.use((config) => {
      config.headers.set("Authorization", "");
      return config;
    }, (err) => {
      return Promise.reject(err);
    })

    this.service.interceptors.response.use((response) => {
      const { data, config } = response;
      if (data.code === RESPONSE_CODE.NO_AUTHORIZATION) {
        router.replace({
          path:LOGIN_URL
        })
      }
      return data;
    }, err => {
      return Promise.reject(err);
    })
  }
  get(url,params,_object={}) {
    return this.service.get(url, { params, ..._object });
  }
  post(url,params,_object={}) {
    return this.service.post(url, { params, ..._object });
  }
  download(url,params,_object={}) {
    return this.service.post(url, { params, ..._object ,responseType:"blob"});
  }
}
export default new RequestHttp(config);