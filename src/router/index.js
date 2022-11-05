import { createRouter, createWebHistory } from 'vue-router'

// 引入登录组件
const LoginWeb = import('../views/LoginWeb.vue')
// 测试用例父组件
const LayOut = import('../views/LayOut.vue')
// 测试用例子组件
const Cases = import('../components/CasesPage.vue')
// 测试报告子组件
const Reports = import('../components/ReportPage.vue')
// 路由核心配置对象,可抽离出来单独JS文件维护。
const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginWeb
  },
  {
    path: '/home',
    name: 'home',
    component: LayOut,
    children: [
      {
        path: '/cases',
        name: 'cases',
        component: Cases
        // 懒加载形式引入组件
        // component: resolve => require([Cases], resolve)
      },
      {
        path: '/reports',
        name: 'reports',
        component: Reports
        // component: resolve => require([Reports], resolve)
      }
    ]
  }
]
// 最终创建过程, 可以把routes数组(路由配置的)对象抽离出来
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由进入之前提前配置
router.beforeEach((to, from, next) => {
  const token = localStorage.userid
  if (token) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
}
)
// 导出路由配置,并被入口文件(main.js)引用,并被vue3渲染引擎挂载
export default router
