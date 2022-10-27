import axios from "axios";

export const LEADS = "leads";
export const companies = "companies";
export const campaigns = "campaigns";
export const leadstatuses = "lead-statuses";
export const sources = "sources";


export function getAllLeads(token: any, companyId: any) {

  return axios.get(`${LEADS}?company=${companyId}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function getAllLeadsById(id: any, token: any) {

  return axios.get(`${LEADS}/${id?.id}`, {
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

export function getleadStatuses(token: any) {

  return axios.get(leadstatuses, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function CreateLead(data: any, token: any) {
  return axios.post(LEADS, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function UpdateLead(id: any, data: any, token: any) {
  return axios.put(`${LEADS}/${id?.id}`, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function DeleteLead(id: any, token: any) {
  return axios.delete(`${LEADS}/${id}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function deleteSelectedLead(Usersid: any, token: any) {
  Usersid.map((id: any) => {
    return axios.delete(`${LEADS}/${id}`, {
      headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
    });
  })

}
