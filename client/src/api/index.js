import axios from "axios";
console.log(import.meta.VITE_API_URL)
function request(option) {
  const instance = axios.create({
    baseURL: import.meta.VITE_API_URL,
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
