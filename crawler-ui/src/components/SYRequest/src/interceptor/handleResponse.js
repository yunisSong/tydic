import { ElMessageBox, ElMessage } from 'element-plus'
import app from '@/main'
const specialHandling = [
  '/project/taskController/applyCreateDB.do',
  '/project/projectController/queryProjectByCreateDB.do',
  '/mam/baseDataController/exportProjectList.do',
  '/mam/baseDataController/exportUserList.do',
  '/commonController/downloadTemplate.do',
  '/indexController/closeGuidePage.do',
  '/report/codeStatisticsController/exportCodeSumList.do',
  '/report/codeStatisticsController/exportCodeLogList.do',
  '/mam/baseDataController/exportGitProjectList.do',
  '/commonController/downloadTempFile.do',
  '/mam/noticeController/queryNoticeListByEnable.do'
]
const isInclude = (responseURL) => {
  let include = false
  for (let url of specialHandling) {

    if (responseURL.indexOf(url) != -1) {
      include = true
      break
    }
  }
  return include
}
//默认处理返回值的逻辑
export default (response) => {
  // const response = response1.response


  //resultCode: 'userCode 不能为空', resultMsg: '1001'
  //如果要特殊处理 可以 根据 response url 来拿到当前的请求地址，去特殊处理错误返回。
  let include = false
  if (response && response.request && response.request.responseURL) {
    const responseURL = response.request.responseURL

    include = isInclude(responseURL)
  }
  if (
    (response.data && response.data.resultCode && !include) ||
    (response && response.response && response.response.data && !include)
  ) {
    let code = ''
    let msg = ''
    if (response.data) {
      code = response.data.resultCode
      msg = response.data.resultMsg
    } else if (response.response.data) {
      code = response.response.data.resultCode
      msg = response.response.data.resultMsg
    }




    switch (code) {
      case 401:
        //跳转到 登录页
        app.config.globalProperties.$mybus.emit('showLogin', {})
        break
      case '401':
        //跳转到 登录页
        app.config.globalProperties.$mybus.emit('showLogin', {})
        break

      default:
        showErrorMessage(msg || '服务器异常，请重试。')
        break
    }
  } else {
    //系统异常。
    if (!include) {
      const msg = response.message || '服务器异常，请重试。'
      showErrorMessage(msg)
    } else {
      //特殊处理。
      const responseURL = response.request.responseURL

      if (
        responseURL.indexOf(
          '/project/projectController/queryProjectByCreateDB.do'
        ) != -1
      ) {
        //首页中间弹框显示。mitt 传递事件
        app.config.globalProperties.$mybus.emit(
          'showQueryProjectByCreateDBError',
          response.data
        )

      }
    }
  }
  // if (response.status) {
  //   switch (response.status) {
  //     // 401: 未登录
  //     // 未登录则跳转登录页面，并携带当前页面的路径
  //     // 在登录成功后返回当前页面，这一步需要在登录页操作。
  //     case 401:
  //       router.replace({
  //         path: '/login',
  //         query: { redirect: router.currentRoute.fullPath }
  //       })
  //       break
  //     // 403 token过期
  //     // 登录过期对用户进行提示
  //     // 清除本地token和清空vuex中token对象
  //     // 跳转登录页面
  //     case 403:
  //       Toast({
  //         message: '登录过期，请重新登录',
  //         duration: 1000,
  //         forbidClick: true
  //       })
  //       // 清除token
  //       localStorage.removeItem('token')
  //       store.commit('loginSuccess', null)
  //       // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
  //       setTimeout(() => {
  //         router.replace({
  //           path: '/login',
  //           query: {
  //             redirect: router.currentRoute.fullPath
  //           }
  //         })
  //       }, 1000)
  //       break
  //     // 404请求不存在
  //     case 404:
  //       Toast({
  //         message: '网络请求不存在',
  //         duration: 1500,
  //         forbidClick: true
  //       })
  //       break
  //     // 其他错误，直接抛出错误提示
  //     default:
  //       Toast({
  //         message: response.data.message ?? '请求错误',
  //         duration: 1500,
  //         forbidClick: true
  //       })
  //   }
  // }
}

function showErrorMessage(message) {
  ElMessage({
    message: message,
    type: 'error'
  })
}
