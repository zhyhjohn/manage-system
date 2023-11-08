import axios from 'axios'

const Api = {
  menuList: '/api/menus',
  userList: '/api/users',
  goodList: '/api/goods',
  rightList: '/api/rights'
}

export const getMenuList = async () => {
  const { data } = await axios.get(Api.menuList)
  return data.menuList
}

export const getUserList = async () => {
  const { data } = await axios.get(Api.userList)
  return data.userList
}

export const getGoodList = async () => {
  const { data } = await axios.get(Api.goodList)
  return data.goodList
}

export const getRightList = async () => {
  const { data } = await axios.get(Api.rightList)
  return data.rightList
}
