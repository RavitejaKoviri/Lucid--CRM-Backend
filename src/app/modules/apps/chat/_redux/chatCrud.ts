import axios from "axios";

export const USER = "users";


export function postEmail(data: any, token: any) {

  return axios.post(USER, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
