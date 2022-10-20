import axios from "axios";
const campaigns = "campaigns"


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
  return axios.post(campaigns, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function getAllCompanies(token: any) {

  return axios.get(companies, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function UpdateCampaign(id: any, data: any, token: any) {
  return axios.put(`${campaigns}/${id?.id}`, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function getCampaignsById(id: any, token: any) {

  return axios.get(`${campaigns}/${id?.id}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function DeleteCampaign(id: any, token: any) {
  return axios.delete(`${campaigns}/${id}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function deleteSelectedCampaign(Usersid: any, token: any) {
  Usersid.map((id: any) => {
    return axios.delete(`${campaigns}/${id}`, {
      headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
    });
  })

}