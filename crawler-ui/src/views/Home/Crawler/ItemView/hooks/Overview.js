// 请求

import { ref } from 'vue'

const config = () => {
  const formModelRef = ref({})

  const { formConfig, formItems } = formDefaultConfig()

  return {
    formModelRef,
    formConfig,
    formItems
  }
}

const formDefaultConfig = () => {
  const formConfig = {
    labelPosition: 'right',
    // labelWidth: '100px',
    size: 'default',
    colLayout: {
      xl: 12, // >1920px 4个
      lg: 12,
      md: 12,
      sm: 12,
      xs: 12
    },
    itemStyle: { paddingRight: '20px' }
  }
  let items = [
    {
      type: 'input',
      label: '名称',
      field: 'name',
      placeholder: '请输入'
    },
    {
      type: 'input',
      label: '项目',
      field: 'project',
      placeholder: '请输入'
    },
    {
      type: 'input',
      label: '执行命令',
      field: 'shell',
      placeholder: '请输入'
    },
    {
      type: 'input',
      label: '参数',
      field: 'argument',
      placeholder: '请输入'
    },
    {
      type: 'select',
      label: '优先级',
      field: 'level',
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
      label: '描述',
      field: 'remark',
      placeholder: '请输入'
    }
  ]
  return {
    formConfig,
    formItems: ref(items)
  }
}

export default config
