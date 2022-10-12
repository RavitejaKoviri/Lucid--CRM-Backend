import axios from "axios";
const campaigns = "campaigns"
export function getAllCampaign(token:any) {

  return axios.get(campaigns, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
