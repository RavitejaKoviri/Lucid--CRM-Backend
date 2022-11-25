import * as requestFromServer from "./rolesCrud.js";
import { RolesSlice, callTypes } from "./rolesSlice";

const { actions } = RolesSlice;

export const fetchAllUsers = (token) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllUsers(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllUsers({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const fetchAllModules = (token) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllModules(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllModules({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const fetchUserById = (token, id) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getUserById(token, id)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedUserById({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const fetchRolePermissions = (token, id) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getRolePermissions(token, id)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedRolePermissions({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find Role permissions";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const fetchRolePermissionsById = (id, token) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getRolePermissionsById(id, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedRolePermissionsById({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find Role permissions By Id";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const fetchCrmRoles = (token, id) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getCrmRoles(token, id)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedCrmRoles({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find crm Role";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const fetchCompanies = (token, id) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getCompanies(token, id)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedCompanies({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find crm Role";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
