import { ElLoading } from 'element-plus'
import { loadingConfig } from './config' //全局的一个基本参数配置

var loading = null
let count = 0
const loadingShow = () => {
  if (count === 0) {
    loading = ElLoading.service(loadingConfig)
  }
  count++
}

const loadingHide = () => {
  count--
  if (count === 0) {
    loading.close()
  }
}

const loadingObj = {
  loadingShow,
  loadingHide
}

export default loadingObj
