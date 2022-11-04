import { createRouter, createWebHashHistory } from 'vue-router'
// 引入首页组件
const HomeView = import('../views/HomePage.vue')
// 引入登录组件
const LoginWeb = import('../views/LoginWeb.vue')
// 路由核心配置对象,可抽离出来单独JS文件维护。
const routes = [
  {
    name: 'login',
    path: '/',
    component: LoginWeb
  },
  {
    name: 'login',
    path: '/login',
    component: LoginWeb
  },
  {
    name: 'home',
    path: '/home',
    component: HomeView
  }
]
// 最终创建过程, 可以把routes数组(路由配置的)对象抽离出来
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 导出路由配置,并被入口文件(main.js)引用,并被vue3渲染引擎挂载
export default router
