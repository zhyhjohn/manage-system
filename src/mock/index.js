import { userList } from './modules/user'
import { goodList } from './modules/good'
import { menuList } from './modules/menu'
import { rightList } from './modules/right'
import { purchaseList } from './modules/order'

export default [
  {
    url: '/api/users',
    method: 'get',
    response: () => {
      return userList
    }
  },
  {
    url: '/api/goods',
    method: 'get',
    response: () => {
      return goodList
    }
  },
  {
    url: '/api/menus',
    method: 'get',
    response: () => {
      return menuList
    }
  },
  {
    url: '/api/rights',
    method: 'get',
    response: () => {
      return rightList
    }
  },
  {
    url: '/api/orders/purchase',
    method: 'get',
    response: () => {
      return purchaseList
    }
  }
]
