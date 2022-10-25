import axios from "axios";

export const TASKS = "tasks";
export const companies = "companies";
export const contact = "contacts";
export const taskstatuses = "task-statuses";


export function fetchAllTasks(token: any) {

  return axios.get(TASKS, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function getAllcompanies(token: any) {
  return axios.get(companies, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function gettaskStatus(token: any) {
  return axios.get(taskstatuses, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
export function gettaskcontacts(token: any) {
  return axios.get(contact, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
export function CreateTask(data: any, token: any) {
  return axios.post(TASKS, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function UpdateTasks(data: any, id: any, token: any) {
  return axios.put(`${TASKS}/${id}`, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function gettaskById(id: any, token: any) {
  return axios.get(`${TASKS}/${id}`, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}