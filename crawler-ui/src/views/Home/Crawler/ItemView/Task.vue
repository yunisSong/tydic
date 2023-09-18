<template>
  <div>
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
      <template #handler="scope">
        <el-link type="primary" class="edit" @click="showItem(scope.row)"
          >查看
        </el-link>
        <el-link type="primary" class="edit">执行 </el-link>
        <el-link type="primary" class="edit">修改 </el-link>
        <el-link type="primary" class="edit">暂停 </el-link>
      </template>
    </SYTable>
  </div>
</template>

<script setup>
import config from './hooks/Task'
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
queryTableData()
</script>

<style lang="scss" scoped></style>
