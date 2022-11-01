import axios from "axios";

export const USERS = "users";
export const MODULES = "allmodules";



export function getAllUsers(token) {

  return axios.get(USERS, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function getAllModules(token) {

  return axios.get(MODULES, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function getUserById(token ,id) {

  return axios.get(`${USERS}?id=${id}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}