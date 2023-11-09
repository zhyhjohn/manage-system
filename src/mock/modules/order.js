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
