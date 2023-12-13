import { createApp } from 'vue'
import 'normalize.css'
import '@/style.css'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
import router from '@/router/Router.js'
import SYTable from '@/components/SYTable'
import SYForm from '@/components/SYForm'
import TableEditView from '@/components/TableEditView.vue'
import App from '@/views/Home/Crawler/List.vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('SYTable', SYTable)
app.component('SYForm', SYForm)
app.component('TableEditView', TableEditView)
app.use(ElementPlus)
app.use(ElementPlus).use(router)

app.mount('#app')
