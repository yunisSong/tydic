import axios from 'axios'
import { Promise } from 'core-js'
import handleResult from './interceptor/handleResponse'
// import { useLoadingStore } from '@/store/loading'
/*
1. post
2. get
3. put

baseurl
timeout

//公共参数

配置化封装API

*/
export default {
  creatInstinse(config) {
    const instance = axios.create({
      timeout: 2000,
      withDirectives: true,
      ...config
    })
    // 添加请求拦截器 一般作为请求需要添加特殊参数的时候使用，目前的项目还没有看到使用场景，先保留，后续再说
    instance.interceptors.request.use(
      (config) => {

        if (config.data === undefined) {
          config.data = {}
        }
        // 是否显示加载框‘
        const { loading = true } = config
        if (loading) {
          // showloading
          // loadingObj.loadingShow()
          // const loading = useLoadingStore()
          // loading.changeLoadingState(true)
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    // 添加响应拦截器
    instance.interceptors.response.use(
      (response) => {
        // const loading = useLoadingStore()

        // loading.changeLoadingState(false)

        if (response.status === 200) {
          const { resultCode } = response.data
          if (resultCode === '1000') {
            return Promise.resolve(response.data)
          } else {
            handleResult(response)
            return Promise.reject(response.data)
          }
        } else {
          handleResult(error.response)

          return Promise.reject(response)
        }
      },
      (error) => {
        // const loading = useLoadingStore()

        // loading.changeLoadingState(false)

        //处理状态码不为200的情况
        handleResult(error)
        return Promise.reject(error)
      }
    )
    return instance
  }
}
