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
    <TableEditView
      class="editView"
      :buttons="buttons"
      @down="downExcel"
      @import="toLead"
      @downTemplate="downGitTemplate"
    />
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
queryTableData()
const showItem = (item) => {
  console.log('item: ', item)
  router.push('/home/crawlerItem')
}
</script>

<style lang="scss" scoped>
.edit {
  margin-left: 10px;
}
</style>
