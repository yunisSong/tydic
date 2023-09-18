// Promise demo

// basic
const demo1 = () => {
  const queryListInfo = (args) => {
    return new Promise((resolve, reject) => {
      // do somethings with args
      // if success resolve else reject
      if (args) {
        resolve({ code: '1000', msg: '成功', data: { id: 1, title: 'yunis' } })
      } else {
        reject({ code: '-1000', msg: '错误信息' })
      }
    })
  }
  queryListInfo(false)
    .then((res) => {
      console.log('res: ', res)
    })
    .catch((err) => {
      console.log('err: ', err)
    })

  queryListInfo(true)
    .then((res) => {
      console.log('res: ', res)
    })
    .catch((err) => {
      console.log('err: ', err)
    })
}
demo1()
