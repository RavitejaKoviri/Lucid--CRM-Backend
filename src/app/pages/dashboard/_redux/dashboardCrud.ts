import axios from "axios";
export const TASKS = "tasks";
export const LEADS = "leads";
export const USER = "contacts";
export const DEALS = "deals";
const campaigns = "campaigns";
export const USERS = "users";
export const TICKETS = "tickets";
export const ROLE_PERMISSIONS = "rolepermissions";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGYwY2ViYmNhZmFkMTBkNjc2MjU5NiIsImlhdCI6MTY2NTQwMTE1OCwiZXhwIjoxNjY3OTkzMTU4fQ.F2z1tVzyk97WvI2Ee6cfqfyRiV8D4aO9UNoh7W_sVw0";

export function fetchAllCampaigns(token: any) {
  return axios.get(campaigns, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
export function fetchAllBookings() {
  return axios.get("http://43.205.49.41:5377/appointments", {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function fetchAllTasks(token: any, companyId: any) {
  return axios.get(`${TASKS}?company=${companyId}`, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function fetchAllLeads(token: any, companyId: any) {
  return axios.get(`${LEADS}?company=${companyId}`, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function fetchAllContacts(token: any, companyId: any) {
  return axios.get(`${USER}?company=${companyId}`, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
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

export function getAllCdrs(token: any) {
  return axios.get(`cdrs`, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getAllTickets(token: any, companyId: any) {
  return axios.get(`${TICKETS}?company=${companyId}`, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
export function getRolePermissionsById(id: any, token: any) {
  return axios.get(`${ROLE_PERMISSIONS}?crmrole=${id}`, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
export function ChangeUser(id: any, data: any, token: any) {
  return axios.put(`${USERS}/${id}`, data, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
export function getUsers(id: any, token: any) {

  return axios.get(`${USERS}/${id?.id}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
