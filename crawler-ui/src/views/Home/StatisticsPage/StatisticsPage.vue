<template>
  <div>
    <div class="flex flex-wrap">
      <template v-for="task in taskMenus">
        <TaskItem class="w-full p-4 md:w-1/2 lg:w-1/4" :task="task" />
      </template>
    </div>
    <!-- 图表 -->
    <div class="echarts w-full h-[400px] mt-3 p-4" ref="lineRef"></div>
    <!-- 统计 饼图 -->
    <!-- <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3"> -->
    <div class="flex flex-wrap p-4">
      <div ref="pieRef1" class="h-[450px] min-w-[250px] flex-1"></div>
      <div ref="pieRef2" class="h-[450px] min-w-[250px] flex-1"></div>
      <div ref="pieRef3" class="h-[450px] min-w-[250px] flex-1"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TaskItem from './TaskItem.vue'
import * as echarts from 'echarts'
import { showLine, showPie } from './hooks/index'

const taskMenus = [
  {
    icon: 'Edit',
    svg: 'online',
    title: '在线节点',
    subTitle: '2',
    color: '#1e80ff'
  },
  {
    icon: 'Edit',
    title: '项目',
    svg: 'project',
    subTitle: '2',
    color: '#1e80ff'
  },
  {
    icon: 'Edit',
    title: '爬虫',
    svg: 'bug',
    subTitle: '2',
    color: '#1e80ff'
  },
  {
    icon: 'Edit',
    title: '定时任务',
    svg: 'task',
    subTitle: '2',
    color: '#1e80ff'
  },
  {
    icon: 'Edit',
    title: '任务总数',
    svg: 'allTask',
    subTitle: '2',
    color: '#1e80ff'
  },
  {
    icon: 'Edit',
    title: '错误任务',
    svg: 'errTask',
    subTitle: '2',
    color: 'rgb(245, 108, 108)'
  },
  {
    icon: 'Edit',
    title: '结果总数',
    svg: 'result',
    subTitle: '2',
    color: 'rgb(103, 194, 58)'
  },
  {
    icon: 'Edit',
    title: '用户',
    svg: 'user',
    subTitle: '2',
    color: '#1e80ff'
  }
]

const lineRef = ref(null)
const pieRef1 = ref(null)
const pieRef2 = ref(null)
const pieRef3 = ref(null)

onMounted(() => {
  showLine(lineRef, echarts)
  showPie(pieRef1, echarts)
  showPie(pieRef2, echarts)
  showPie(pieRef3, echarts)
})
</script>

<style lang="scss" scoped></style>
