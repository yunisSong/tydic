<template>
  <div class="hy-table">
    <el-table
      :data="listData"
      stripe
      style="width: 100%"
      v-bind="childrenProps"
      :title="title"
      :header-cell-style="sssss"
      :scrollbar-always-on="scrollbarAlwaysOn"
      border
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
        class="text-strong"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        :index="indexMethod"
        label="序号"
        align="center"
        width="80"
        class="text-strong"
      ></el-table-column>
      <template v-for="item in propList">
        <el-table-column
          :show-overflow-tooltip="true"
          v-bind="item"
          :align="item.align || 'center'"
          class="text-strong"
        >
          <!--           show-overflow-tooltip
 -->
          <template #header>
            <slot :name="item.prop + 'header'">
              {{ item.label }}
            </slot>
          </template>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
      <slot></slot>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <div class="container">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page.currentPage"
            :page-size="page.pageSize"
            :total="totalCount"
            :page-sizes="[10, 20, 50, 100]"
            background
            layout="total, prev, pager,jumper, next,sizes "
          >
          </el-pagination>
        </div>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SYTable',
  data() {
    return {
      // 标题
      title: {
        type: String,
        default: ''
      },
      scrollbarAlwaysOn: {
        type: Boolean,
        default: true
      },
      // 是否展示 序号
      showIndexColumn: {
        type: Boolean,
        default: true
      },

      // <!-- 是否展示选择项 -->
      showSelectColumn: {
        type: Boolean,
        default: false
      },

      // 展示页脚
      showFooter: {
        type: Boolean,
        default: true
      },

      // 数据源
      listData: {
        type: Array,
        default: () => []
      },

      // 表格要展示的属性
      propList: {
        type: Array,
        default: () => []
      },
      // 表格要展示的属性
      childrenProps: {
        type: Object,
        default: () => ({})
      },

      // 数据总条数
      totalCount: {
        type: Number,
        default: 0
      },

      // 页码
      page: {
        type: Object,
        default: () => ({
          currentPage: 1,
          pageSize: 10
        })
      }
    }
  },

  methods: {
    sssss({ row, column, rowIndex, columnIndex }) {
      return {
        backgroundColor: '#f5f7fa',
        color: '#606377',
        fontWeight: 600,
        'text-align': 'center'
      }
    },
    indexMethod(index) {
      return (this.page.currentPage - 1) * this.page.pageSize + index + 1
    },

    handleSizeChange(pageSize) {
      emits('update:page', { ...this.page, pageSize })
    },
    handleCurrentChange(currentPage) {
      emits('update:page', { ...this.page, currentPage })
    }
  }
}
</script>

<style lang="scss" scoped>
.sy-table-header-style {
  font-weight: 700;
  background-color: aqua !important;
  th {
    background-color: aqua;
  }
}

.container {
  margin: 10px 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  .pagination {
    flex: 1;
    position: relative;
    right: 0;
    justify-content: end;
  }
}
</style>
