import { createRouter, createWebHashHistory } from 'vue-router'

//公开路由表
const publicRoutes = [
  {
    path: '/',
    component: () => import('@/layout/indexLayout')
  },
  {
    path: '/login',
    component: () => import('@/views/login/indexWeb')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
