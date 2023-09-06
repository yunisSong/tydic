<template>
  <div class="w-full overflow-y-auto">
    <SYTable
      class=""
      :listData="tableList"
      v-bind="contentTableConfig"
      :page="page"
      :totalCount="totalCount"
      @update:page="updatePage"
    >
    </SYTable>
  </div>
</template>

<script setup>
import SYTable from '@/components/SYTable'
import { tableListConfig } from './Hooks/SonarTableConfig.js'
const { page, totalCount, updatePage, tableList, contentTableConfig } =
  tableListConfig()
</script>

<style lang="scss" scoped></style>
