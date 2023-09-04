<template>
  <div class="task-item flex text-white rounded-sm">
    <!-- icon -->
    <div class="flex items-center justify-center text-5xl w-[58px]">
      <el-icon class="leading-tight">
        <component :is="task.icon"></component>
      </el-icon>
    </div>
    <!-- info -->
    <div class="flex-1 pl-3 bg-white bg-opacity-30 text-[14px]">
      <div class="flex h-full flex-col justify-center items-start">
        <span>{{ task.title }}</span>
        <span>{{ task.subTitle }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  task: {
    icon: String,
    title: String,
    subTitle: String,
    color: String
  }
})
const bgColor = ref(props.task.color)
</script>

<style lang="scss" scoped>
.task-item {
  background-color: v-bind(bgColor);
}
</style>
