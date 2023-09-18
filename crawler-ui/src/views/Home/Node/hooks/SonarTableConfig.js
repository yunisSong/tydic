// 请求

import { ref, watch } from 'vue'

// 列表
const requestTableData = (model, page) => {
  // 获取pages
  // 搜索表单参数。
  // modelValue.keywords = ''
  return {}
}

export const tableListConfig = () => {
  // 处理表格数据
  const { modelValue, query, config, items } = formConfig()
  const tableHandleModel = tablePageConfig(modelValue)
  return {
    modelValue,
    ...tableHandleModel,
    ...tableDataConfig(),
    modelValue,
    config,
    items
  }
}
// table data
// table page

const tablePageConfig = (modelValue) => {
  //分页插件
  const page = ref({
    pageSize: 10,
    currentPage: 1
  })
  const totalCount = ref(0)
  const updatePage = (p) => {
    page.value = p
  }

  watch(page, (page, prev) => {
    requestTableData(modelValue.value, page.value)
  })

  const tableList = ref([])

  return {
    page,
    totalCount,
    requestTableData,
    updatePage,
    tableList
  }
}

const tableDataConfig = () => {
  const contentTableConfig = {
    propList: [
      { prop: 'projectName', label: '项目名称', width: '100' },
      { prop: 'projectManagerName', label: '项目经理', width: '140' },
      {
        prop: 'sonarProjectName',
        label: 'sonar项目名',
        width: '120',
        slotName: 'create'
      },
      { prop: 'projectUrl', label: '源码路径', width: '118' },
      { prop: 'statusCd', slotName: 'statusCd', label: '状态', width: '80' },
      {
        prop: 'execStatus',
        slotName: 'execStatus',
        label: '执行状态',
        width: '100'
      },
      {
        prop: 'execDate',
        label: '执行时间',
        width: '200'
      },
      {
        prop: 'execLog',
        slotName: 'execLog',
        label: '执行日志信息',
        'show-overflow-tooltip': false,
        height: '42',

        minWidth: '170'
      },

      { prop: 'remark', label: '备注', width: '120' },

      {
        label: '操作',
        width: '358',
        slotName: 'handler',
        'show-overflow-tooltip': false,
        fixed: 'right'
      }
    ],
    showIndexColumn: false,
    showSelectColumn: false
    // scrollbarAlwaysOn: true
  }

  return {
    contentTableConfig
  }
}

const formConfig = () => {
  let modelValue = ref({})

  const config = {
    labelPosition: 'right',
    // labelWidth: '100px',
    size: 'default',
    colLayout: {
      xl: 8, // >1920px 4个
      lg: 8,
      md: 8,
      sm: 8,
      xs: 8
    },
    itemStyle: { paddingRight: '20px' }
  }
  let items = [
    {
      type: 'input',
      label: '所属部门',
      field: 'orgName',
      placeholder: '请输入'
    },
    {
      type: 'select',
      label: '在岗状态',
      placeholder: '请选择',
      field: 'workStatus'
    },
    {
      type: 'input',
      label: '关键字',
      field: 'keywords',
      placeholder: '请输入'
    },
    {
      type: 'button',
      title: '查询',
      buttonType: 'primary',
      tag: '1',
      style: {
        marginLeft: '-80px'
      }
    }
  ]
  const query = () => {
    requestTableData(modelValue.value, page.value)
  }
  return {
    modelValue,
    query,
    config,
    items: ref(items)
  }
}
