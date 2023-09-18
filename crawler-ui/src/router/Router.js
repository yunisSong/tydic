import {
  createRouter,
  createWebHashHistory,
  createMemoryHistory
} from 'vue-router'
import Home from '../views/Home/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/home/statisticsPage',
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/home/statisticsPage',
        name: 'StatisticsPage',
        component: () =>
          import(
            /* webpackChunkName: "StatisticsPage" */ '../views/Home/StatisticsPage/statisticsPage.vue'
          )
      },
      {
        path: '/home/nodeList',
        name: 'NodeList',
        component: () =>
          import(
            /* webpackChunkName: "StatisticsPage" */ '@/views/Home/Node/NodeList.vue'
          )
      },
      {
        path: '/home/scheduled',
        name: 'ScheduledTask',
        component: () =>
          import(
            /* webpackChunkName: "StatisticsPage" */ '@/views/Home/ScheduledTask/Task.vue'
          )
      },
      {
        path: '/home/crawler',
        name: 'Crawler',
        component: () =>
          import(
            /* webpackChunkName: "StatisticsPage" */ '@/views/Home/Crawler/List.vue'
          )
      },
      {
        path: '/home/crawlerItem',
        name: 'CrawlerItem',
        component: () =>
          import(
            /* webpackChunkName: "StatisticsPage" */ '@/views/Home/Crawler/Item.vue'
          )
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () =>
      import(/* webpackChunkName: "Login" */ '../views/404/404.vue')
  },
  { path: '/:catchAll(.*)', redirect: '/404' }
]
const router = createRouter({
  history: createWebHashHistory(),
  // history: createMemoryHistory(),

  routes
})

export default router
