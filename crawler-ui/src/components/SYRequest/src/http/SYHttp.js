import defaultConfig from '../config/config'
import SYRequest from '../SYRequest'
export const instance = SYRequest.creatInstinse(defaultConfig)
export const instance1 = SYRequest.creatInstinse({
  baseURL: process.env.VUE_APP_BASE_URL,

  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*'
  },
  responseType: 'arraybuffer'
})

function get(url, params) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, { params: params })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
function post(url, params) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
function down(url, params) {
  return new Promise((resolve, reject) => {
    instance1
      .post(url, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export default {
  get,
  post,
  down
}
