import { createRouter, createWebHashHistory } from 'vue-router'

import Login from '@/pages/Login/index.vue'
import Home from '@/layouts/index.vue'
import Welcome from '@/pages/Welcome/index.vue'
import User from '@/pages/User/index.vue'
import Good from '@/pages/Good/index.vue'
import BarChart from '@/pages/Chart/barChart.vue'
import LineChart from '@/pages/Chart/lineChart.vue'
import PieChart from '@/pages/Chart/pieChart.vue'
import Role from '@/pages/Right/role.vue'
import RoleRight from '@/pages/Right/roleRight.vue'
import Purchase from '@/pages/Order/purchase.vue'
import Import from '@/pages/Order/import.vue'
import Outbound from '@/pages/Order/outbound.vue'

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
      { path: '/welcome', name: '系统主页', component: Welcome },
      { path: '/userlist', name: '用户列表', component: User },
      { path: '/goodlist', name: '商品列表', component: Good },
      { path: '/barchart', name: '柱状图', component: BarChart },
      { path: '/linechart', name: '折线图', component: LineChart },
      { path: '/piechart', name: '折线图', component: PieChart },
      { path: '/role', name: '角色管理', component: Role },
      { path: '/roleright', name: '权限管理', component: RoleRight },
      { path: '/purchase', name: '采购管理', component: Purchase },
      { path: '/import', name: '入库管理', component: Import },
      { path: '/outbound', name: '出库管理', component: Outbound },
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
