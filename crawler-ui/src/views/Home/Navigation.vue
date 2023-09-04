<template>
  <div class="flex items-center">
    <div class="w-[25px] h-[25px] flex justify-center items-center text-2xl">
      <el-icon @click="toggleMenuShow()">
        <template v-if="show">
          <Fold />
        </template>
        <template v-else>
          <Expand />
        </template>
      </el-icon>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import eventBus from '../../EventBus'
const show = ref(true)

const toggleMenuShow = () => {
  show.value = !show.value
  eventBus.emit('toggleMenuShow', {})
}
</script>

<style lang="scss" scoped></style>
