<template>
  <div>
    <svg :style="style">
      <!-- xlink:href执行用哪一个图标，属性值务必 #icon 图标名字 -->
      <!-- use标签fill属性可以设置图标的颜色 -->
      <use :xlink:href="iconName" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  width: String | Number,
  height: String | Number,
  icon: String,
  color: {
    type: String,
    default: 'white'
  }
})
const iconName = `#icon-${props.icon}`
const defaultSize = 32
const defaultValue = (value) => {
  if (!value) {
    value = `${defaultSize}px`
  }
  return value
}

const widthValue = () => {
  let width = props.width
  console.log('width: ', width)
  if (isNaN(Number(width, 10))) {
    width = defaultValue(width)
    return width
  } else {
    width = defaultValue(width)
    return width
  }
}
console.log('widthValue: ', widthValue())

const heightValue = () => {
  let height = props.height
  if (isNaN(Number(height, 10))) {
    height = defaultValue(height)
    return height
  } else {
    height = defaultValue(height)
    return height
  }
}

console.log('widthValue: ', heightValue())

const style = {
  width: widthValue(),
  height: heightValue()
}
</script>

<style lang="scss" scoped></style>
