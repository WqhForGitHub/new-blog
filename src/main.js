import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import store from './stores'

import App from './App.vue'
import router from './router'

import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Antd)
app.mount('#app')

//创建v-highlight全局指令
app.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
