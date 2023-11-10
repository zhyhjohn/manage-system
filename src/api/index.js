import axios from 'axios'

const Api = {
  loginInfo: '/api/login',
  menuList: '/api/menus',
  userList: '/api/users',
  goodList: '/api/goods',
  rightList: '/api/rights',
  purchaseList: '/api/orders/purchase',
  importList: '/api/orders/import',
  outboundList: '/api/orders/outbound'
}

export const getLoginInfo = async (username, password) => {
  const { data } = await axios.post(Api.loginInfo)
  if (username === data.loginInfo.username && password === data.loginInfo.password) return data.loginInfo
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

export const getPurchaseList = async () => {
  const { data } = await axios.get(Api.purchaseList)
  return data.purchaseList
}

export const getImportList = async () => {
  const { data } = await axios.get(Api.importList)
  return data.importList
}

export const getOutboundList = async () => {
  const { data } = await axios.get(Api.outboundList)
  return data.outboundList
}
