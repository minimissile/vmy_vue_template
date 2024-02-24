import App from '../main'
import axios from 'axios'
import {BASE_URL, CODE_OK, tokenKey} from '../api/config'
import router from '../router/index'
import {Toast} from 'vant';
import store from '../store'

const handleErr = (err) => {
  return Promise.reject(err)
}

// 请求的 task，id索引
const requestIns = {
  // id: ins
}

// toast使用多例模式
// Toast.allowMultiple()

// 默认配置
axios.defaults.timeout = 5000
axios.defaults.timeoutErrorMessage = '网络请求超时'
axios.defaults.baseURL = BASE_URL

const CancelToken = axios.CancelToken;
let cancel;

// 请求拦截
axios.interceptors.request.use(
  config => {

    if (config.method === 'put') {
      config.headers['Content-Type'] = 'application/json'
    }

    config.cancelToken = new CancelToken(function executor(c) {
      cancel = c;
    })

    config.headers[tokenKey] = 'Bearer ' + store.state.token || ''

    // 是否进行加载中loading提示
    if (config.loading) {
      App.$toast.clear()
      App.$toast.loading({
        message: '加载中...',
        forbidClick: true
      })
    }

    if (config.id && requestIns[config.id]) {
      // requestIns[config.id].abort()
      cancel()
      delete requestIns[config.id]
    }
    return config
  },
  handleErr
)

// 路由响应拦截
axios.interceptors.response.use(
  res => {
    App.$toast.clear()
    const data = res.data || {}
    if (res.config.id && requestIns[res.config.id]) delete requestIns[res.config.id]

    if (data.code == CODE_OK) {
      // 正常数据返回
      return {...data, ok: true}
    } else if (data.code === '401000' || data.code === '401001' || data.code === '401002') {
      // 如果是http状态码为200, 返回结果报错
      router.replace({
        path: '/login',
        query: {redirect: router.currentRoute.fullPath}
      })
      store.dispatch('reset')
      return {...data, ok: false}
    } else {
      // 如果需要吐司错误提示
      if (typeof res.config.err === 'boolean' && res.config.err) {
        if (process.env.NODE_ENV == 'development') {

          App.$toast(data.msg || '请求错误')
        }
      }
      return {...data, ok: false}
    }
  },
  error => {
    Toast.clear()
    if (error.response.config.id && requestIns[error.response.config.id]) {
      delete requestIns[error.response.config.id]
    }

    if (error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求参数有误!'
          break;
        case 401:
          if (router.currentRoute.fullPath.indexOf('/login') == -1) {
            store.dispatch('savaReloadHash', router.currentRoute.fullPath)
          }
          error.message = '未授权，请登录!'
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}
          })
          store.dispatch('reset');
          break;
        case 404:
          error.message = '请求失败，未找到对应数据!'
          break;
        case 500:
          error.message = '服务器未响应!'
          break;
      }
    }
    handleErr
  })

export default axios
