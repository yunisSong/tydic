<template>
  <div class="p-4">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <template v-for="tab in tabsItems">
        <el-tab-pane :label="tab.label" :name="tab.name">
          <template v-if="tab.name == '概览'">
            <Overview />
          </template>
          <template v-else-if="tab.name == '任务'">
            <Task />
          </template>
          <template v-else-if="tab.name == '定时任务'">
            <ScheduledTask />
          </template>
          <template v-else-if="tab.name == '数据'">
            <DataVue />
          </template>
        </el-tab-pane>
      </template>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DataVue from './ItemView/Data.vue'
import Overview from './ItemView/Overview.vue'
import ScheduledTask from './ItemView/ScheduledTask.vue'
import Task from './ItemView/Task.vue'

const prop = defineProps({
  item: Object
})
const activeName = ref('概览')
const handleClick = (item, event) => {
  console.log('item: ', item)
}
const tabsItems = [
  {
    label: '概览',
    name: '概览',
    title: '概览'
  },
  {
    label: '任务',
    name: '任务',
    title: '任务'
  },
  {
    label: '定时任务',
    name: '定时任务',
    title: '定时任务'
  },
  {
    label: '数据',
    name: '数据',
    title: '数据'
  }
]
</script>

<style lang="scss" scoped></style>
