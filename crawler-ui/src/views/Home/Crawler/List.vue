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
    <TableEditView class="editView" @add="showEditView" />
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
    <el-dialog
      v-model="dialogFormVisible"
      v-if="dialogFormVisible"
      title="新增权限组"
    >
      <template #header>
        <div class="divider">新增权限组</div>
      </template>
      <Edit @add="addCrawler" @cancel="hiddenDialog" />
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Edit from './Edit.vue'

import config from './Hooks/FormTableConfig.js'

const router = useRouter()
const dialogFormVisible = ref(false)
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
  router.push('/home/crawler/crawlerItem')
}
console.log('11111')

const buttons = []
const showEditView = () => {
  console.log(2222)
  dialogFormVisible.value = true
}

// 新增爬虫
const addCrawler = (form) => {
  console.log('form: ', form.task_name)
}
const hiddenDialog = () => {
  dialogFormVisible.value = false
}
</script>

<style lang="scss" scoped>
.edit {
  margin-left: 10px;
}
</style>
