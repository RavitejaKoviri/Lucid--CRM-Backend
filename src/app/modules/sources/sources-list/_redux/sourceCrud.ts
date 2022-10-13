import axios from "axios";

export const LEADS = "leads";
export const companies = "companies";
export const campaigns = "campaigns";
export const sourcestatuses = "source-statuses";
export const sources = "sources";


export function getAllSources(token: any) {

  return axios.get(LEADS, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function getAllSourcesById(id: any, token: any) {

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

export function getsourceStatuses(token: any) {

  return axios.get(sourcestatuses, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function CreateSource(data: any, token: any) {
  return axios.post(sources, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function UpdateSource(id: any, data: any, token: any) {
  return axios.put(`${LEADS}/${id?.id}`, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function DeleteSource(id: any, token: any) {
  return axios.delete(`${LEADS}/${id}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function deleteSelectedSource(Usersid: any, token: any) {
  Usersid.map((id: any) => {
    return axios.delete(`${LEADS}/${id}`, {
      headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
    });
  })

}
