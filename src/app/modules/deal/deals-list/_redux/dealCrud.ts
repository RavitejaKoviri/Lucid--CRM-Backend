import axios from "axios";

export const DEALS = "users";
export const companies = "companies";
export const campaigns = "campaigns";
export const dealstatuses = "deal-statuses";
export const sources = "sources";

export function getAlldeal(token: any) {
  return axios.get(DEALS, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
 
}
export function getSource (token: any) {
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