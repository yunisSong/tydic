Array.prototype.replaceKeyWithKey = function (targetKey, valueKey) {
  this.forEach((element) => {
    element[targetKey] = element[valueKey]
  })
}

Array.prototype.findTarget = function (targetKey, eqValue, defaultValue) {
  let target = null
  this.forEach((element) => {
    if (element[targetKey] === eqValue) {
      target = element
    }
  })
  return target ?? defaultValue
}
