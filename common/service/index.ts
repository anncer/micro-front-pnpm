import { BASE_URL } from './request/config'
import axios from 'axios'
import type { AxiosRequestHeaders } from 'axios'
import cookie from 'auth-cookie'
export function request(options = {}) {
  const Axios = axios.create({
    baseURL: BASE_URL,
    timeout: 600000,
    responseType: 'json',
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      x_token: '',
    },
  })
  Axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('TOKEN')
      if (token) {
        config.headers['x_token'] = localStorage.getItem('TOKEN')
        // @ts-ignore
        /*const headers: AxiosRequestHeaders = {}
        headers['x_token'] = token
        headers.Authorization = token*/
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  // 返回状态判断(添加响应拦截器)
  Axios.interceptors.response.use(
    (res) => {
      if (res.headers['token']) {
        localStorage.setItem('TOKEN', res.headers['token'])
      }
      return res.data
    },
    (error) => {
      return Promise.reject(error)
    },
  )
  return Axios
}

const http = request()
export default http
