import Mock from 'mockjs'

export const userList = Mock.mock({
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