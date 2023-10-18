// 引入: mockjs 模块;
import Mock from 'mockjs'

const userList = Mock.mock({
  //生成10条数据,数组形式
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
  //生成10条数据,数组形式
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
  }
]
