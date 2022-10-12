import axios from "axios";
// import { campaigns, companies, sources } from "../../../leads/leads-list/_redux/leadCrud";

export const USER = "contacts";
export const CONTACTS = "contacts";

export const sources = "sources";
export const companies = "companies";
export const campaigns = "campaigns";

export function getAllContacts(token: any) {

  return axios.get(USER, {
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


export function CreateContact(data: any, token: any) {
  return axios.post(CONTACTS, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}