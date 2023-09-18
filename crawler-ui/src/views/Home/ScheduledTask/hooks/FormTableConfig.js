// 请求

import { ref, watch } from 'vue'

const config = () => {
  const tableListModelRef = ref([])
  const formModelRef = ref({})
  const queryTableData = () => {
    console.log('formModelRef', formModelRef.value)
    console.log('formModelRef', formModelRef.value)

    const data = {
      resultCode: 1000,
      resultMsg: '成功',
      totalCount: 4,
      data: [
        {
          projectName: '微信头像爬取',
          sonarProjectName: '微信爬虫',
          status: '已完成',
          remark:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit error similique nesciunt fuga quidem accusamus ullam maiores quis, eligendi cupiditate quos suscipit veritatis consectetur voluptatem sint repudiandae impedit odio perspiciatis aut distinctio sed facere eius! Eum libero vero dolorem voluptates? Velit, impedit debitis? Veniam perspiciatis blanditiis nisi autem excepturi debitis pariatur, voluptatem odio! Fuga impedit necessitatibus suscipit provident sed aliquam, iure cupiditate eaque, odit veritatis deserunt vero. Perspiciatis, nemo officiis delectus possimus aliquid corrupti tempora maiores veritatis nihil eligendi ipsam quis dolorem reprehenderit voluptas sit vero cum nam expedita est?'
        },
        {
          projectName: '微博敏感信息爬取',
          sonarProjectName: '微博爬虫',
          status: '爬取中',
          remark:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit error similique nesciunt fuga quidem accusamus ullam maiores quis, eligendi cupiditate quos suscipit veritatis consectetur voluptatem sint repudiandae impedit odio perspiciatis aut distinctio sed facere eius! Eum libero vero dolorem voluptates? Velit, impedit debitis? Veniam perspiciatis blanditiis nisi autem excepturi debitis pariatur, voluptatem odio! Fuga impedit necessitatibus suscipit provident sed aliquam, iure cupiditate eaque, odit veritatis deserunt vero. Perspiciatis, nemo officiis delectus possimus aliquid corrupti tempora maiores veritatis nihil eligendi ipsam quis dolorem reprehenderit voluptas sit vero cum nam expedita est?'
        },
        {
          projectName: 'Twitter 散人留言爬取',
          sonarProjectName: 'Twitter 爬虫',
          status: '失败',
          remark:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit error similique nesciunt fuga quidem accusamus ullam maiores quis, eligendi cupiditate quos suscipit veritatis consectetur voluptatem sint repudiandae impedit odio perspiciatis aut distinctio sed facere eius! Eum libero vero dolorem voluptates? Velit, impedit debitis? Veniam perspiciatis blanditiis nisi autem excepturi debitis pariatur, voluptatem odio! Fuga impedit necessitatibus suscipit provident sed aliquam, iure cupiditate eaque, odit veritatis deserunt vero. Perspiciatis, nemo officiis delectus possimus aliquid corrupti tempora maiores veritatis nihil eligendi ipsam quis dolorem reprehenderit voluptas sit vero cum nam expedita est?'
        },
        {
          projectName: 'YouTube 地理杂志留言爬取',
          sonarProjectName: 'YouTube 爬虫',
          status: '已完成',
          remark:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit error similique nesciunt fuga quidem accusamus ullam maiores quis, eligendi cupiditate quos suscipit veritatis consectetur voluptatem sint repudiandae impedit odio perspiciatis aut distinctio sed facere eius! Eum libero vero dolorem voluptates? Velit, impedit debitis? Veniam perspiciatis blanditiis nisi autem excepturi debitis pariatur, voluptatem odio! Fuga impedit necessitatibus suscipit provident sed aliquam, iure cupiditate eaque, odit veritatis deserunt vero. Perspiciatis, nemo officiis delectus possimus aliquid corrupti tempora maiores veritatis nihil eligendi ipsam quis dolorem reprehenderit voluptas sit vero cum nam expedita est?'
        }
      ]
    }

    totalCount.value = data.totalCount
    tableListModelRef.value = data.data.filter((item) => {
      return item.projectName.indexOf(formModelRef.value.keywords ?? '') != -1
    })
  }

  const { formConfig, formItems } = formDefaultConfig()
  const { page, totalCount, updatePage } = tablePageConfig(queryTableData)
  const { contentTableConfig } = tableDataConfig()
  return {
    tableListModelRef,
    formModelRef,
    page,
    totalCount,
    updatePage,
    contentTableConfig,
    formConfig,
    formItems,
    queryTableData
  }
}

// table data
// table page
const tablePageConfig = (requestTableData) => {
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
    requestTableData()
  })

  return {
    page,
    totalCount,
    updatePage
  }
}

const tableDataConfig = () => {
  const contentTableConfig = {
    propList: [
      {
        prop: 'projectName',
        slotName: 'projectName',
        label: '名称',
        width: '250'
      },
      {
        prop: 'sonarProjectName',
        label: '项目',
        width: '120',
        slotName: 'create'
      },
      { prop: 'status', label: '状态', width: '140' },

      { prop: 'remark', label: '备注', width: 'auto' },
      { prop: 'exe', slotName: 'exe', label: '是否启用', width: 'auto' },

      {
        label: '操作',
        width: 'auto',
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

const formDefaultConfig = () => {
  const formConfig = {
    labelPosition: 'right',
    // labelWidth: '100px',
    size: 'default',
    colLayout: {
      xl: 6, // >1920px 4个
      lg: 6,
      md: 6,
      sm: 6,
      xs: 6
    },
    itemStyle: { paddingRight: '20px' }
  }
  let items = [
    {
      type: 'select',
      label: '部门',
      field: 'orgName',
      options: [
        {
          label: '智慧物业部',
          value: '智慧物业部'
        },
        {
          label: '智慧物业部1',
          value: '智慧物业部1'
        },
        {
          label: '智慧物业部2',
          value: '智慧物业部2'
        }
      ],
      placeholder: '请输入'
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
      tag: '1'
      // style: {
      //   marginLeft: '-80px'
      // }
    }
  ]
  return {
    formConfig,
    formItems: ref(items)
  }
}

export default config
