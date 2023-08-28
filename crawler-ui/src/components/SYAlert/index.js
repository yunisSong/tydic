import { ElMessageBox, ElMessage } from 'element-plus'
const alert = (message, title = '提示', action = null) => {
  ElMessageBox.alert(message, title, {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: action
  })
}

const showMessage = (message, title, type, handle, cancel) => {
  // ElMessageBox.confirm(message, title, {
  //   confirmButtonText: '确定',
  //   cancelButtonText: '返回',
  //   type: type
  // })
  //   .then(() => {
  //
  //     handle()
  //   })
  //   .catch(() => {
  //
  //     cancel()
  //   })

  ElMessageBox.confirm(message, title, {
    confirmButtonText: '确定',
    cancelButtonText: '返回',
    type: type
  })
    .then(handle)
    .catch(cancel)
}
const showTips = (msg, type) => {
  ElMessage({
    message: msg,
    type: type
  })
}
export default { alert, showMessage, showTips }
