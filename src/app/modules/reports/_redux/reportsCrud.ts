import axios from "axios";
export const TASKS = "tasks";
export const LEADS = "leads";
export const CONTACT = "contacts";
export const DEALS = "deals";
export const TARGETS = "targets";
export const TICKETS = "tickets";
const campaigns = "campaigns"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGYwY2ViYmNhZmFkMTBkNjc2MjU5NiIsImlhdCI6MTY2NTQwMTE1OCwiZXhwIjoxNjY3OTkzMTU4fQ.F2z1tVzyk97WvI2Ee6cfqfyRiV8D4aO9UNoh7W_sVw0"

export function fetchAllCampaigns(token: any, companyId: any) {
  return axios.get(`${campaigns}?company=${companyId}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function fetchAllBookings() {

  return axios.get("http://43.205.49.41:5377/appointments", {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function fetchAllTasks(token: any, companyId: any) {

  return axios.get(`${TASKS}?company=${companyId}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function fetchAllLeads(token: any, companyId: any) {

  return axios.get(`${LEADS}?company=${companyId}&_sort=date:DESC`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function fetchAllContacts(token: any, companyId: any) {

  return axios.get(`${CONTACT}?company=${companyId}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function fetchAllDeals(token: any, companyId: any) {
  return axios.get(`${DEALS}?company=${companyId}`, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function fetchAllTargets(token: any, companyId: any) {

  return axios.get(`${TARGETS}?company=${companyId}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function getAllTickets(token: any, companyId: any) {

  return axios.get(`${TICKETS}?company=${companyId}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function getLeadsByDate(date: any, token: any) {
  // console.log(date, "date");
  return axios.get(`${LEADS}?date=${date}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}