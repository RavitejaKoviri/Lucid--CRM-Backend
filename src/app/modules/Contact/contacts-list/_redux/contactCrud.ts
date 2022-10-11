import axios from "axios";

export const USER = "contacts";


export function getAllContacts(token: any) {

  return axios.get(USER, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
