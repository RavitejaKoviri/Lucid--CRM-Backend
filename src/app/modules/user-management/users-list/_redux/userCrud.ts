import axios from "axios";

export const USER = "users";
export const ROLES = "rolebasedaccesses";
export const ADD_USER = "auth/local/register";


export function getAllUsers(token: any) { 

  return axios.get(USER, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
  
}
export function getAllLUsersById(id: any, token: any) {

  return axios.get(`${USER}/${id?.id}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function CreateUser(data: any,token:any) {
  console.log(data);
  return axios.post(ADD_USER, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function getRoles(token:any) {
  return axios.get(ROLES, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function getRoleById(id:any,token:any) {
  return axios.get(`${ROLES}/${id}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function getAllUsersByCompanyId(id: any, token: any) {

  return axios.get(`${USER}?company=${id}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}