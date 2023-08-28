<template>
  <div class="home">
    <!-- left -->
    <Menu class="menu" />
    <!-- right -->
    <Main class="main" />
  </div>
</template>

<script setup>
import Menu from './Menu.vue'
import Main from './Main.vue'
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  width: 100vw;
  height: 100vh;
  .menu {
    width: 100px;
    flex-shrink: 0;
    background-color: red;
  }
  .main {
    flex: 1;
    background-color: yellow;
  }
}
</style>
