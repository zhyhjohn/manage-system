// 引入: mockjs 模块;
import Mock from 'mockjs'

const userList = Mock.mock({
  'userList|20': [
    {
      'id|+1': 100,
      name: '@cname',
      gender: '@cword("男女")',
      email: '@email',
      tel: /^1[3-9]\d{9}$/,
      address: '@county(true)'
    }
  ]
})

const goodList = Mock.mock({
  'goodList|20': [
    {
      'id|+1': 200,
      name: '@ctitle(3, 5)',
      category: '@cword(2)',
      number: '@integer(10, 200)',
      price: '@integer(50, 500)'
    }
  ]
})

const menuList = Mock.mock({
  'menuList': [
    {
      'id': 300,
      authName: '用户管理',
      path: '/user',
      children: [
        {
          'id': 301,
          authName: '用户列表',
          path: '/userlist',
        }
      ]
    },
    {
      'id': 310,
      authName: '商品管理',
      path: '/good',
      children: [
        {
          'id': 311,
          authName: '商品列表',
          path: '/goodlist',
        }
      ]
    },
    {
      'id': 320,
      authName: '统计管理',
      path: '/chart',
      children: [
        {
          'id': 321,
          authName: '柱状图',
          path: '/barchart',
        },
        {
          'id': 322,
          authName: '折线图',
          path: '/linechart',
        }
      ]
    }
  ]
})

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
