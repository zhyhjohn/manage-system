import Mock from 'mockjs'

export const goodList = Mock.mock({
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
