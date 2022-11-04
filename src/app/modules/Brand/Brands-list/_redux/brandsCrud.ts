import axios from "axios";

export const BRAND = "brands";
export const companies = "companies";
export const campaigns = "campaigns";
export const leadstatuses = "lead-statuses";
export const sources = "sources";


export function getAllBrands(token: any) {

  return axios.get(BRAND, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

// export function getAllBrandsById(id: any, token: any) {

//   return axios.get(`${BRAND}/${id?.id}`, {
//     headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
//   });
// }
export function getAllBrandsById(token: any, companyId: any) {

  return axios.get(`${BRAND}/${companyId?.id}`, {
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

export function getBrandsStatuses(token: any) {

  return axios.get(leadstatuses, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}


export function CreateBrands(data: any, token: any) {
  return axios.post(BRAND, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function UpdateBrands(id: any, data: any, token: any) {
  return axios.put(`${BRAND}/${id?.id}`, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function DeleteBrands(id: any, token: any) {
  return axios.delete(`${BRAND}/${id}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function deleteSelectedBrands(Usersid: any, token: any) {
  Usersid.map((id: any) => {
    return axios.delete(`${BRAND}/${id}`, {
      headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
    });
  })

}
