import axios, { AxiosResponse } from 'axios'
import { ID, Response } from '../../../../../_metronic/helpers'
import { Lead, LeadsQueryResponse } from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const USER_URL = `${API_URL}/user`
const GET_USERS_URL = `${API_URL}/users/query`

const getUsers = (query: string): Promise<LeadsQueryResponse> => {
  return axios
    .get(`${GET_USERS_URL}?${query}`)
    .then((d: AxiosResponse<LeadsQueryResponse>) => d.data)
}

const getUserById = (id: ID): Promise<Lead | undefined> => {
  return axios
    .get(`${USER_URL}/${id}`)
    .then((response: AxiosResponse<Response<Lead>>) => response.data)
    .then((response: Response<Lead>) => response.data)
}

const createUser = (user: Lead): Promise<Lead | undefined> => {
  return axios
    .put(USER_URL, user)
    .then((response: AxiosResponse<Response<Lead>>) => response.data)
    .then((response: Response<Lead>) => response.data)
}

const updateUser = (user: Lead): Promise<Lead | undefined> => {
  return axios
    .post(`${USER_URL}/${user.id}`, user)
    .then((response: AxiosResponse<Response<Lead>>) => response.data)
    .then((response: Response<Lead>) => response.data)
}

const deleteUser = (userId: ID): Promise<void> => {
  return axios.delete(`${USER_URL}/${userId}`).then(() => { })
}

const deleteSelectedUsers = (userIds: Array<ID>): Promise<void> => {
  const requests = userIds.map((id) => axios.delete(`${USER_URL}/${id}`))
  return axios.all(requests).then(() => { })
}

export { getUsers, deleteUser, deleteSelectedUsers, getUserById, createUser, updateUser }
