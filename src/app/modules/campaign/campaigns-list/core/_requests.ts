import axios, { AxiosResponse } from 'axios'
import { ID, Response } from '../../../../../_metronic/helpers'
import { Campaign, UsersQueryResponse } from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
console.log("apiurl", API_URL)
const USER_URL = `${API_URL}/users`
const GET_USERS_URL = `${API_URL}/users/query`

const getUsers = (query: string): Promise<UsersQueryResponse> => {
  return axios
    .get(`${GET_USERS_URL}?${query}`)
    .then((d: AxiosResponse<UsersQueryResponse>) => d.data)
}

const getUserById = (id: ID): Promise<Campaign | undefined> => {
  return axios
    .get(`${USER_URL}/${id}`)
    .then((response: AxiosResponse<Response<Campaign>>) => response.data)
    .then((response: Response<Campaign>) => response.data)
}

const createUser = (user: Campaign): Promise<Campaign | undefined> => {
  return axios
    .put(USER_URL, user)
    .then((response: AxiosResponse<Response<Campaign>>) => response.data)
    .then((response: Response<Campaign>) => response.data)
}

const updateUser = (user: Campaign): Promise<Campaign | undefined> => {
  return axios
    .post(`${USER_URL}/${user.id}`, user)
    .then((response: AxiosResponse<Response<Campaign>>) => response.data)
    .then((response: Response<Campaign>) => response.data)
}

const deleteUser = (userId: ID): Promise<void> => {
  return axios.delete(`${USER_URL}/${userId}`).then(() => { })
}

const deleteSelectedUsers = (userIds: Array<ID>): Promise<void> => {
  const requests = userIds.map((id) => axios.delete(`${USER_URL}/${id}`))
  return axios.all(requests).then(() => { })
}

export { getUsers, deleteUser, deleteSelectedUsers, getUserById, createUser, updateUser }
