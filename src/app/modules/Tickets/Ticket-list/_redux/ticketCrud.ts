import axios from "axios";
export const TICKETS = "tickets";
export const companies = "companies";
export const users = "users";
export const customers = "customers";
export const ticketStatus = "ticket-statuses";


export function getAllcompanies(token: any) {

  return axios.get(companies, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}


export function getAllUsers(token: any) {

  return axios.get(users, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}


export function getAllcustomers(token: any) {

  return axios.get(customers, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function CreateTicket(data: any, token: any) {
  return axios.post(TICKETS, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}


export function getAllticketStatus(token: any) {

  return axios.get(ticketStatus, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function getAllTickets(token: any) {

  return axios.get(TICKETS, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}