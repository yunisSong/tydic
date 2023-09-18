// 请求

import { ref, watch } from 'vue'

const config = () => {
  const tableListModelRef = ref([])

  const queryTableData = (contentTableConfig) => {
    console.log('contentTableConfig: ', contentTableConfig)
    const data = {
      resultCode: 1000,
      resultMsg: '成功',
      totalCount: 4,
      data: [
        {
          title: '数据源1',
          url: 'URL111',
          img: '图片地址--',
          create: '李老师'
        },
        {
          title: '数据源2',
          url: 'URL111222',
          img: '图片地址--',
          create: '王老师'
        },
        {
          title: '数据源3',
          url: 'URL111333',
          img: '图片地址--',
          create: '张老师'
        },
        {
          title: '数据源4',
          url: 'URL111444',
          img: '图片地址--',
          create: '苍老师'
        }
      ]
    }

    totalCount.value = data.totalCount
    tableListModelRef.value = data.data

    let propList = []
    const item = data.data[0]
    Object.keys(item).forEach((element) => {
      const item = { prop: element, label: element }
      propList.push(item)
      console.log('element: ', element)
    })
    console.log('propList: ', propList)

    contentTableConfig.value.propList = propList
    //
  }

  const { page, totalCount, updatePage } = tablePageConfig(queryTableData)
  const { contentTableConfig } = tableDataConfig()
  return {
    tableListModelRef,
    page,
    totalCount,
    updatePage,
    contentTableConfig,
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
    showIndexColumn: false,
    showSelectColumn: false
    // scrollbarAlwaysOn: true
  }

  return {
    contentTableConfig: ref(contentTableConfig)
  }
}

export default config
