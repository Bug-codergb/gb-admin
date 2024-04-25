import axios from "axios";
function request(option) {
  const instance = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout:5000
  })
  instance.interceptors.request.use((config) => {
    return config
  }, (e) => {
    console.log(e)
  })
  instance.interceptors.response.use((res) => {
    return res.data
  }, (err) => {
    console.log(err);
  })
  return instance(option);
}
export default request;
