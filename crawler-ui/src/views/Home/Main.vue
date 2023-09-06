<template>
  <div class="overflow-hidden">
    <!-- nav -->
    <Navigation class="h-[60px] bg-white" />
    <!-- tab 容器 -->
    <!-- 真实的视图 -->
    <router-view class="w-full p-4"></router-view>
  </div>
</template>

<script setup>
import Navigation from './Navigation.vue'
</script>

<style lang="scss" scoped></style>
