import axios from "axios";

export const DEALS = "deals";
export const companies = "companies";
export const campaigns = "campaigns";
export const dealstatuses = "deal-statuses";
export const sources = "sources";

export function getAlldeal(token: any, companyId: any) {
  return axios.get(`${DEALS}?company=${companyId}`, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getdealsById(id: any, token: any) {
  return axios.get(`${DEALS}/${id}`, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getSource(token: any) {
  return axios.get(sources, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getcampaigns(token: any) {
  return axios.get(campaigns, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
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

export function getdealStatuses(token: any) {
  return axios.get(dealstatuses, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
export function CreateDeal(data: any, token: any) {
  return axios.post(DEALS, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function UpdateDeal(data: any, id: any, token: any) {
  console.log(data, id, "UpdateDeal")
  return axios.put(`${DEALS}/${id}`, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function DeleteDeal(id: any, token: any) {
  return axios.delete(`${DEALS}/${id}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}