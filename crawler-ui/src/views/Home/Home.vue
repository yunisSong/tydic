<template>
  <div class="home flex overflow-hidden w-full">
    <!-- left -->
    <Menu
      class="menu"
      :class="{ menuWidth: !showMenu }"
      :showTitle="showMenu"
    />
    <!-- right -->
    <Main class="main flex-1" />
    <!-- <router-view class="w-10/12 h-11 bg-slate-800"></router-view> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Menu from './Menu.vue'
import Main from './Main.vue'
import eventBus from '../../EventBus'

const showMenu = ref(true)
eventBus.on('toggleMenuShow', (e) => {
  showMenu.value = !showMenu.value
})
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  width: 100vw;
  height: 100vh;
  .menu {
    width: 240px;
    flex-shrink: 0;
    background-color: #304156;
    transition: all 0.35s ease;
  }
  .menuWidth {
    width: 56px;
  }
  .main {
    flex: 1;
  }
}
</style>
