import axios from "axios";

export const USERS = "users";
export const MODULES = "allmodules";
export const ROLE_PERMISSIONS = "rolepermissions";
export const CRM_ROLE = "crmroles";
export const COMPANIES = "companies";

export function getAllUsers(token) {
  return axios.get(USERS, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
export function getAllModules(token) {
  return axios.get(MODULES, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
export function getUserById(token, id) {
  return axios.get(`${USERS}/${id}`, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
export function getRolePermissions(token, id) {
  return axios.get(ROLE_PERMISSIONS, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
export function getRolePermissionsById(id, token) {
  return axios.get(`${ROLE_PERMISSIONS}?crmrole=${id}`, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
export function getCrmRoles(token, id) {
  return axios.get(CRM_ROLE, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
export function getCompanies(token) {
  return axios.get(COMPANIES, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getRolePermissionsUpdate(id, token, data) {
  return axios.put(`${ROLE_PERMISSIONS}?crmrole=${id}`, data, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
