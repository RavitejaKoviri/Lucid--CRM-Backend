import axios from "axios";

export const TICKETS = "tickets";
export const ticketstatuses = "ticket-statuses";
export const user = "users";



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

export function getticketStatuses(token: any) {
  return axios.get(ticketstatuses, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function CreateTicket(data: any, token: any) {
  return axios.post(TICKETS, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function getassignedto(token: any) {

  return axios.get(user, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}