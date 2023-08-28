export const creatFormDate = (items) => {
  let data = {}
  items.forEach((item) => {
    let key = item.field
    if (!!key) {
      data[key] = item
    }
  })

  return data
}

export const creatFormRules = (items) => {
  let data = {}
  items.forEach((item) => {
    let key = item.field
    changLabelColon(item)
    if (!!key) {
      data[key] = item.rules
    }
  })

  return data
}

function changLabelColon(item) {
  let label = item.label
  if (label) {
    const index = label.indexOf(':')
    const index1 = label.indexOf('：')

    if (index === -1 && index1 === -1) {
      item.label += '：'
    }
  }
}
