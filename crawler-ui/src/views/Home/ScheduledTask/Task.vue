<template>
  <div>
    <SYForm
      v-bind="formConfig"
      :formItems="formItems"
      v-model="formModelRef"
      ref="formRef"
      @buttonClick="queryTableData"
    >
    </SYForm>
    <SYTable
      class=""
      :listData="tableListModelRef"
      v-bind="contentTableConfig"
      :page="page"
      :totalCount="totalCount"
      @update:page="updatePage"
    >
      <template #projectName="scope">
        <el-link type="primary" class="edit" @click="showItem(scope.row)">
          {{ scope.row.projectName }}
        </el-link>
      </template>
      <template #exe="scope">
        <el-switch v-model="switchValue[scope.row.projectName]" />
      </template>
      <template #handler="scope">
        <el-link type="primary" class="edit" @click="showItem(scope.row)"
          >查看
        </el-link>
        <el-link type="primary" class="edit">执行 </el-link>
        <el-link type="danger" class="edit">删除 </el-link>
      </template>
    </SYTable>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRouter } from 'vue-router'

import config from './Hooks/FormTableConfig.js'

const router = useRouter()
const {
  tableListModelRef,
  formModelRef,
  page,
  totalCount,
  updatePage,
  contentTableConfig,
  formConfig,
  formItems,
  queryTableData
} = config()
const showItem = (item) => {
  console.log('item: ', item)
  router.push('/home/crawlerItem')
}
const switchValue = ref({})
watch(tableListModelRef, (v1, v2) => {
  console.log('v1: ', v1)

  console.log('v2: ', v2)
  v1.forEach((item) => {
    console.log('item: ', item)
    const name = item.projectName
    const exeStatus = item.exe == 1
    switchValue.value[name] = exeStatus
  })
})
console.log('switchValue: ', switchValue.value)

queryTableData()
</script>

<style lang="scss" scoped>
.edit {
  margin-left: 10px;
}
</style>
