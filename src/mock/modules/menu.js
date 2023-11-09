import Mock from 'mockjs'

export const menuList = Mock.mock({
    'menuList': [
        {
            'id': 310,
            authName: '用户管理',
            path: '/user',
            children: [
                {
                    'id': 311,
                    authName: '用户列表',
                    path: '/userlist',
                }
            ]
        },
        {
            'id': 320,
            authName: '商品管理',
            path: '/good',
            children: [
                {
                    'id': 321,
                    authName: '商品列表',
                    path: '/goodlist',
                }
            ]
        },
        {
            'id': 330,
            authName: '统计管理',
            path: '/chart',
            children: [
                {
                    'id': 331,
                    authName: '柱状图',
                    path: '/barchart',
                },
                {
                    'id': 332,
                    authName: '折线图',
                    path: '/linechart',
                },
                {
                    'id': 333,
                    authName: '饼图',
                    path: '/piechart',
                }
            ]
        },
        {
            'id': 340,
            authName: '权限管理',
            path: '/right',
            children: [
                {
                    'id': 341,
                    authName: '角色管理',
                    path: '/role',
                },
                {
                    'id': 342,
                    authName: '权限管理',
                    path: '/roleright',
                }
            ]
        },
        {
            'id': 350,
            authName: '订单管理',
            path: '/order',
            children: [
                {
                    'id': 351,
                    authName: '采购管理',
                    path: '/purchase',
                },
                {
                    'id': 352,
                    authName: '入库管理',
                    path: '/import',
                },
                {
                    'id': 353,
                    authName: '出库管理',
                    path: '/outbound',
                }
            ]
        },
    ]
})
