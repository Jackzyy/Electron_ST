import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'
import nestedRouter from './modules/nested'

/**
 * 公共路由
 */
export const constantRoutes = [
  {
    path: '/',
    redirect: 'home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home')
      }
    ]
  },
  nestedRouter
]

/**
 * 异步权限路由
 */
export const asyncRoutes = []

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
