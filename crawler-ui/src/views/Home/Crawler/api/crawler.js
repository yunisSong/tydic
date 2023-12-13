import network from '@/components/SYRequest/index'

/*
1. 新建爬虫

/base-web/common/crawlService/addCrawlTask

2. 执行任务

/base-web/common/crawlService/startCrawlTask

3. 查询数据

/base-web/common/crawlService/query_crawl_task

*/

export function addCrawlTask(params) {
  return test()
  return network.post(
    '/project/sonarConfigController/queryProjectName.do',
    params
  )
}
export function startCrawlTask(params) {
  return test1()
  return network.post(
    '/project/sonarConfigController/startCrawlTask.do',
    params
  )
}
export function queryCrawlTask(params) {
  return test2()
  return network.post(
    '/project/sonarConfigController/query_crawl_task.do',
    params
  )
}
const timeOut = 2000

const test = () => {
  const res = {
    result_code: '200',
    result_msg: '新增成功',
    task_id: '001'
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res)
    }, timeOut)
  })
}
const test1 = () => {
  const res = {
    result_code: '200',
    result_msg: '成功',
    task_id: '001'
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res)
    }, timeOut)
  })
}
const test2 = () => {
  const res = {
    result_code: '200',
    result_msg: '成功',
    task_id: '001',
    rows: [
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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res)
    }, timeOut)
  })
}
