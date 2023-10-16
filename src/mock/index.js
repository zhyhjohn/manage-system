// 引入: mockjs 模块;
import Mock from 'mockjs'

// 内存模拟数据
// const userList = []

// for (let i = 0; i < 20; i++) {
//   userList.push({
//     id: Mock.mock('@increment()'),
//     name: Mock.mock('@cname'),
//     gender: Mock.mock('@cword("男女")'),
//     email: Mock.mock('@email'),
//     tel: Mock.mock(/^1[3-9]\d{9}$/),
//     address: Mock.mock('@county(true)')
//   })
// }

const userList = Mock.mock({
  //生成10条数据,数组形式
  'userList|20': [
    {
      'id|+1': 1,
      name: '@cname',
      gender: '@cword("男女")',
      email: '@email',
      tel: /^1[3-9]\d{9}$/,
      address: '@county(true)'
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
  }
]
