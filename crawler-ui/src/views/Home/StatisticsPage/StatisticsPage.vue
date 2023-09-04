<template>
  <div>
    <div class="flex flex-wrap gap-4">
      <template v-for="task in taskMenus">
        <TaskItem class="w-[200px] h-[58px]" :task="task" />
      </template>
    </div>
  </div>
</template>

<script setup>
import TaskItem from './TaskItem.vue'

const taskMenus = [
  {
    icon: 'Edit',
    title: '在线节点',
    subTitle: '2',
    color: '#1e80ff'
  },
  {
    icon: 'Edit',
    title: '在线节点',
    subTitle: '2',
    color: '#1e80ff'
  },
  {
    icon: 'Edit',
    title: '在线节点',
    subTitle: '2',
    color: '#1e80ff'
  },
  {
    icon: 'Edit',
    title: '在线节点',
    subTitle: '2',
    color: '#1e80ff'
  },
  {
    icon: 'Edit',
    title: '在线节点',
    subTitle: '2',
    color: '#1e80ff'
  }
]
</script>

<style lang="scss" scoped></style>
