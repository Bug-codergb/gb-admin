import axios from "axios";
class RequestHttp{
  constructor(config) {
    this.service = axios.create(config);
    this.service.interceptors.request.use((config) => {
      return config;
    }, (err) => {
      return Promise.reject(err);
    })

    this.service.interceptors.response.use((response) => {
      const { data, config } = response;
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