import { ElMessageBox } from 'element-plus'
export const alert = (message, title, action) => {
  ElMessageBox.alert(message, title, {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: () => {
      action()
    }
  })
}
