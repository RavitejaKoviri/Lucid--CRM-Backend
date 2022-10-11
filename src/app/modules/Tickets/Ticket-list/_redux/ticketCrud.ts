import axios from "axios";

export const TICKETS = "tickets";


export function getAllUsers(token: any) {

  return axios.get(TICKETS, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
