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
      error.clientMessage = "Can't find patient test reports";;
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
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const fetchUserById = (token,id) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getUserById(token,id)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedUserById({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};