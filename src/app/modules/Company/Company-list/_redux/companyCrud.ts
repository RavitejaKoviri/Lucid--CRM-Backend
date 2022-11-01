import axios from "axios";

export const COMPANIES = "companies";
export const Brand = "brands";
export const Industry = "industries";
export const USER = "users";


export function getAllCompanies(token: any) {

  return axios.get(COMPANIES, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}




export function getAllCompaniesById(id: any, token: any) {

  return axios.get(`${COMPANIES}/${id?.id}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}



export function getbrand(token: any) {

  return axios.get(Brand, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function getindustrys(token: any) {

  return axios.get(Industry, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
export function getuser(token: any) {

  return axios.get(USER, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function CreateCompany(data: any, token: any) {
  return axios.post(COMPANIES, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function UpdateCompany(id: any, data: any, token: any) {
  return axios.put(`${COMPANIES}/${id?.id}`, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function DeleteCompany(id: any, token: any) {
  return axios.delete(`${COMPANIES}/${id}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function deleteSelectedCompany(Usersid: any, token: any) {
  Usersid.map((id: any) => {
    return axios.delete(`${COMPANIES}/${id}`, {
      headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
    });
  })

}
