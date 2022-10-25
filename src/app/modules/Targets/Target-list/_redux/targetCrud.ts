import axios from "axios";
export const TARGET = "targets";
export const user = "users";
export const companies = "companies";
export const targetstatuses = "target-statuses";


export function getTargets(token: any) {

  return axios.get(TARGET, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function fetchAllTargets(token: any) {

  return axios.get(TARGET, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function getAllCompanies(token: any) {

  return axios.get(companies, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function getTargetStatuses(token: any) {

  return axios.get(targetstatuses, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function getassignedto(token: any) {

  return axios.get(user, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function CreateTarget(data: any, token: any) {
  return axios.post(TARGET, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function UpdateTarget(data: any, id: any, token: any) {
  return axios.put(`${TARGET}/${id}`, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function gettargetById(id: any, token: any) {
  return axios.get(`${TARGET}/${id}`, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}