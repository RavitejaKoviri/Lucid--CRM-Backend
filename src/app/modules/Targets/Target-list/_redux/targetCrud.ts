import axios from "axios";
export const TARGET = "targets";
export const user = "users";
export const companies = "companies";
export const targetstatuses = "Target-statuses";


export function getTargets(token: any) {

  return axios.get(TARGET, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export const TARGETS = "targets";


export function fetchAllTargets(token: any) {

  return axios.get(TARGETS, {
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