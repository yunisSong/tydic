// 请求

import { ref, watch } from 'vue'
import { addCrawlTask, startCrawlTask, queryCrawlTask } from '../api/crawler'

const config = () => {
  const formModelRef = ref({})
  const formRef = ref(null)
  const { formConfig, formItems } = formDefaultConfig()
  const addTask = (argument) => {
    addCrawlTask(argument).then((res) => {
      console.log('res', res)
    })
  }

  return {
    formRef,
    formModelRef,
    formConfig,
    formItems,
    addTask
  }
}

const formDefaultConfig = () => {
  const setMaxInputNumber = (max) => {
    return { max: max, message: `输入内容不能长于${max}字符`, trigger: 'blur' }
  }
  const formConfig = {
    labelPosition: 'right',
    // labelWidth: '100px',
    size: 'default',
    colLayout: {
      xl: 24, // >1920px 4个
      lg: 24,
      md: 24,
      sm: 24,
      xs: 24
    },
    itemStyle: { paddingRight: '20px' }
  }
  let items = [
    // {
    //   type: 'select',
    //   label: '部门',
    //   field: 'orgName',
    //   options: [
    //     {
    //       label: '智慧物业部',
    //       value: '智慧物业部'
    //     },
    //     {
    //       label: '智慧物业部1',
    //       value: '智慧物业部1'
    //     },
    //     {
    //       label: '智慧物业部2',
    //       value: '智慧物业部2'
    //     }
    //   ],
    //   placeholder: '请输入'
    // },
    {
      type: 'input',
      label: '任务名称',
      field: 'task_name',
      placeholder: '请输入',
      rules: [
        {
          required: true,
          message: '输入内容不能为空',
          trigger: ['blur', 'change']
        },
        setMaxInputNumber(100)
      ]
    },
    {
      type: 'textarea',
      label: '任务描述',
      field: 'task_desc',
      placeholder: '请输入',
      rules: [
        {
          required: true,
          message: '输入内容不能为空',
          trigger: ['blur', 'change']
        },
        setMaxInputNumber(2000)
      ]
    },
    {
      type: 'input',
      label: '执行命令',
      field: 'task_cmd',
      placeholder: '请输入',
      rules: [
        {
          required: true,
          message: '输入内容不能为空',
          trigger: ['blur', 'change']
        },
        setMaxInputNumber(2000)
      ]
    }
    // {
    //   type: 'button',
    //   title: '查询',
    //   buttonType: 'primary',
    //   tag: '1'
    // }
  ]
  return {
    formConfig,
    formItems: ref(items)
  }
}

export default config
