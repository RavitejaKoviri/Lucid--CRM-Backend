import axios from "axios";

export const LEADS = "leads";


export function getAllLeads(token: any) {

  return axios.get(LEADS, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function CreateLead(data: any, token: any) {
  return axios.post(LEADS, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
