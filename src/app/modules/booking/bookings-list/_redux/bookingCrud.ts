import axios from "axios";

export const masterToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGYwY2ViYmNhZmFkMTBkNjc2MjU5NiIsImlhdCI6MTY3MzMyOTc2MywiZXhwIjoxNjc1OTIxNzYzfQ.tA73R-aSHWjRX-swCMdsJm1uoyG4uS-vqFwWA1bePlA"
export const healthpackage = "health-packages";
export const healthscan = "healthscans";
export const branchwisetest = "branchwisetests";
export const doctor = "doctors";
export const city = "cities";
export const BRANCH_ADDRESSES = "branches";
export const patient = "patients";



export function getAllBooking() {

  return axios.get("http://43.205.49.41:5377/appointments", {
    headers: { "content-type": "application/json", Authorization: `Bearer ${masterToken}` },
  });
}
//HealthPackageByBranch
export function getHealthPackageByBranch(id: any) {
  return axios.get(`http://43.205.49.41:5377/health-packages?branches.id=${id}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${masterToken}` },
  }
  );
}
//HealthScanByBranch
export function getHealthScanByBranch(id: any) {
  return axios.get(`http://43.205.49.41:5377/healthscans?branches.id=${id}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${masterToken}` },
  });
}
//BranchwisetestByBranch
export function getBranchwisetestByBranch(id: any) {
  return axios.get(`http://43.205.49.41:5377/branchwisetests?branch=${id}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${masterToken}` },
  });
}
//Doctor
export function getAllDoctor() {
  return axios.get("http://43.205.49.41:5377/doctors", {
    headers: { "content-type": "application/json", Authorization: `Bearer ${masterToken}` },
  });
}
//city
export function getAllCity() {
  return axios.get("http://43.205.49.41:5377/cities", {
    headers: { "content-type": "application/json", Authorization: `Bearer ${masterToken}` },
  });
}
//BranchAddressesByCityId
export function getBranchAddressesByCityId(id: any) {
  return axios.get(`http://43.205.49.41:5377/branches?city=${id}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${masterToken}` },
  });
}
//patients
export function getAllPatient() {
  return axios.get("http://43.205.49.41:5377/patients", {
    headers: { "content-type": "application/json", Authorization: `Bearer ${masterToken}` },
  });
}
//createbooking
export function Createbooking(data: any, token: any) {
  return axios.post(`http://43.205.49.41:5377/appointments`, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
//updatebooking
export function Updatebooking(id: any, data: any, token: any) {
  return axios.put(`http://43.205.49.41:5377/appointments/${id}`, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function Deletebooking(id: any, token: any) {
  return axios.delete(`http://43.205.49.41:5377/appointments/${id}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}

export function deleteSelectedbooking(Usersid: any, token: any) {
  Usersid.map((id: any) => {
    return axios.delete(`http://43.205.49.41:5377/appointments/${id}`, {
      headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
    });
  })

}
export function getAllbookingsById(id: any, token: any) {

  return axios.get(`http://43.205.49.41:5377/appointments/${id?.id}`, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}