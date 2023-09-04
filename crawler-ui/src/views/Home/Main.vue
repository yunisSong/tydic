<template>
  <div>
    <!-- nav -->
    <Navigation class="h-[60px] bg-white" />
    <!-- tab 容器 -->
    <!-- 真实的视图 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import Navigation from './Navigation.vue'
</script>

<style lang="scss" scoped></style>
