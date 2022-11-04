// vue2和vue3的核心区别: 前者命令方式,实例化创建Vue实例; 后者是将命令和功能API函数化
// 通过createApp去创建应用实例
import { createApp } from 'vue'
// 主组件在main中被引用,页面入口文件
import App from './App.vue'
// vue项目路由配置文件
import router from './router'
// vue项目状态管理配置文件
import store from './store'
// vue项目html+css的UI框架
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 公共样式库
import './assets/scss/common.scss'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
