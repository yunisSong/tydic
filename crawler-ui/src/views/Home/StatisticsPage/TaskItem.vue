<template>
  <div class="flex justify-center items-center text-white p-4 h-[80px]">
    <!-- icon -->
    <div class="task-item flex-1 flex rounded-sm">
      <div class="flex items-center justify-center w-[78px]">
        <SvgIconVue :icon="task.svg" />
      </div>
      <!-- info -->
      <div class="flex-1 pl-3 bg-white bg-opacity-30 text-[14px] p-5">
        <div class="flex gap-2 h-full flex-col justify-center items-start">
          <span>{{ task.title }}</span>
          <span>{{ task.subTitle }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import SvgIconVue from '../../../components/svg-icon/SvgIcon.vue'

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
