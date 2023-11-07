import Mock from 'mockjs'

export const menuList = Mock.mock({
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
                },
                {
                    'id': 323,
                    authName: '饼图',
                    path: '/piechart',
                }
            ]
        },
        {
            'id': 330,
            authName: '权限管理',
            path: '/right',
            children: [
                {
                    'id': 331,
                    authName: '角色管理',
                    path: '/role',
                },
                {
                    'id': 332,
                    authName: '权限管理',
                    path: '/roleright',
                }
            ]
        }
    ]
})
