import { userList } from './modules/user'
import { goodList } from './modules/good'
import { menuList } from './modules/menu'

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
  }
]
