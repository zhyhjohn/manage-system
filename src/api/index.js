import axios from 'axios'

const Api = {
  userList: '/api/users',
  goodList: '/api/goods'
}

export const getUserList = async () => {
  const { data } = await axios.get(Api.userList)
  return data.userList
}

export const getGoodList = async () => {
  const { data } = await axios.get(Api.goodList)
  return data.goodList
}
