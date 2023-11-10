import Mock from 'mockjs'

export const purchaseList = Mock.mock({
    'purchaseList|10': [
        {
            id: 'CG' + '@natural()',
            time: '@datetime("yyyy-MM-dd HH:mm:ss")',
            purchaser: '@cname()',
            good: () => Mock.Random.pick(['瓜子', '饮料', '矿泉水']),
            remark: '@csentence()',
        }
    ]
})

export const importList = Mock.mock({
    'importList|10': [
        {
            id: 'RK' + '@natural()',
            time: '@datetime("yyyy-MM-dd HH:mm:ss")',
            supplier: '@cname()',
            good: () => Mock.Random.pick(['瓜子', '饮料', '矿泉水']),
            remark: '@csentence()',
        }
    ]
})

export const outboundList = Mock.mock({
    'outboundList|10': [
        {
            id: 'CK' + '@natural()',
            time: '@datetime("yyyy-MM-dd HH:mm:ss")',
            customer: '@cname()',
            good: () => Mock.Random.pick(['瓜子', '饮料', '矿泉水']),
            remark: '@csentence()',
        }
    ]
})
