<template>
  <div>
    <ul class="menu">
      <template v-for="item in menuItems">
        <li
          class="menu_item text-base text-white hover:bg-[#263445] py-3 px-[20px] flex items-center h-[40px] transition-all duration-300"
          :class="{
            'text-[#409eff] bg-[#263445]': selectItem.url == item.url
          }"
          @click="clickMenu(item)"
        >
          <el-icon class="leading-tight">
            <component :is="item.icon"></component>
          </el-icon>
          <span
            class="menu_item_title overflow-hidden leading-tight opacity-100 pl-3"
            :class="{
              'opacity-0': !showTitle
            }"
          >
            {{ item.title }}
          </span>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const currentPath = router.currentRoute.value.fullPath

const props = defineProps({
  showTitle: true
})
const menuItems = [
  {
    icon: 'Menu',
    title: '主页',
    url: '/home/statisticsPage'
  },
  {
    icon: 'Link',
    title: '节点',
    url: '/home/nodeList'
  },
  {
    icon: 'Share',
    title: '定时任务',
    url: '/home/scheduled'
  },
  {
    icon: 'Share',
    title: '爬虫',
    url: '/home/crawler'
  }
]
const selectItem = ref(menuItems[0])

const targetItems = menuItems.filter((item) => {
  return item.url == currentPath
})
if (targetItems.length > 0) {
  selectItem.value = targetItems[0]
}

const clickMenu = (item) => {
  console.log('item: ', item)
  selectItem.value = item
  router.push(item.url)
}
</script>

<style lang="scss" scoped>
.menu_item_title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
