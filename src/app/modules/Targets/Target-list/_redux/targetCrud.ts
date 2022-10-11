import axios from "axios";

export const USER = "users";


export function getAllUsers(token: any) {

  return axios.get(USER, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
