import axios from "axios"
import { BASE_URL, TIME_OUT } from "./config"
class YzzRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL, // 注意这个baseUrl是大写
      timeout,
    })
    // 响应拦截器
    this.instance.interceptors.response.use(
      res => {
        return res.data
      },
      err => {
        console.log(err)
      }
    )
  }
  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }
  post(config) {
    return this.request({ ...config, method: "post" })
  }
}
const request = new YzzRequest(BASE_URL, TIME_OUT)
export default request
