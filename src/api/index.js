import axios from 'axios'

const Api = {
  userList: '/api/users'
}

export const getUserList = async () => {
  const { data } = await axios.get(Api.userList)
  return data.userList
}
