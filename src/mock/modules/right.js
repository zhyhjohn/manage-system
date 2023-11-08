import Mock from 'mockjs'

export const rightList = Mock.mock({
    'rightList|8': [
        {
            'id|+1': 10000,
            username: '@string(10)',
            password: '@string("number",10)',
            role: () => Mock.Random.pick(['超级管理员', '管理员', '普通用户'])
        }
    ]
})
