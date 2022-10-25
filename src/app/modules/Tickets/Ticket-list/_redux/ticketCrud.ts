import axios from "axios";

export const TICKETS = "tickets";



export function getAllUsers(token: any) {

  return axios.get(TICKETS, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function UpdateTicket(data: any, id: any, token: any) {
  return axios.put(`${TICKETS}/${id}`, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}