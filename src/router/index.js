import { createRouter, createWebHashHistory } from 'vue-router'

import Login from '@/pages/Login/index.vue'
import Home from '@/layouts/index.vue'
import Welcome from '@/pages/Welcome/index.vue'
import User from '@/pages/User/index.vue'
import Good from '@/pages/Good/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/user', component: User },
      { path: '/good', component: Good }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') next()
  const token = window.sessionStorage.getItem('token')
  if (!token) return next('/login')
  next()
})

export default router
