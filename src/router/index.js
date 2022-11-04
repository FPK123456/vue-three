import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginWeb.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomePage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router