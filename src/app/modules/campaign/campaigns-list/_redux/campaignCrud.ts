import axios from "axios";
const campaigns = "campaigns"
export const CAMPAIGN = "campaigns";

export const companies = "companies";
export const campaignstatuses = "Campaign-statuses";
export function getAllCampaign(token:any) {

  return axios.get(campaigns, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function getCampaignStatuses(token: any) {

  return axios.get(campaignstatuses, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function CreateCampaign(data: any, token: any) {
  return axios.post(CAMPAIGN, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function getAllCompanies(token: any) {

  return axios.get(companies, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}