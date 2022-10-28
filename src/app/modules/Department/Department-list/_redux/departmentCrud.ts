import axios from "axios";

export const DEPARTMENT = "departments";
export const companies = "companies";
export const campaigns = "campaigns";
export const leadstatuses = "lead-statuses";
export const sources = "sources";


export function getAllDepartment(token: any) {

  return axios.get(DEPARTMENT, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function getAllDepartmentById(token: any,companyId:any) {

  return axios.get(`${DEPARTMENT}?company=${companyId}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function getSource(token: any) {

  return axios.get(sources, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function getcampaigns(token: any) {

  return axios.get(campaigns, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function getAllcompanies(token: any) {

  return axios.get(companies, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function getDepartmentStatuses(token: any) {

  return axios.get(leadstatuses, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}


export function CreateDepartment(data: any, token: any) {
  return axios.post(DEPARTMENT, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function UpdateDepartment(id: any, data: any, token: any) {
  return axios.put(`${DEPARTMENT}/${id?.id}`, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function DeleteDepartment(id: any, token: any) {
  return axios.delete(`${DEPARTMENT}/${id}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function deleteSelectedDepartment(Usersid: any, token: any) {
  Usersid.map((id: any) => {
    return axios.delete(`${DEPARTMENT}/${id}`, {
      headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
    });
  })

}
