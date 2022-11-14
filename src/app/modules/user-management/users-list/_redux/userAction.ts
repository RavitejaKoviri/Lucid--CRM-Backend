import { any } from "prop-types";
import * as requestFromServer from "./userCrud";
import { ManageUserSlice, callTypes } from "./userSlice";

const { actions } = ManageUserSlice;

//getAll user details
export const getAllUsers = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllUsers(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.getedAllUsersDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const getUsersById = (id: any, token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllLUsersById(id, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllUsersDetailsById({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const CreateUser = (data: any, token: any) => (dispatch: any) =>
  requestFromServer
    .CreateUser(data, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedUser({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
export const fetchRoles = (token: any) => (dispatch: any) =>
  requestFromServer
    .getRoles(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedRoles({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
export const fetchRoleById = (id: any, token: any) => (dispatch: any) =>
  requestFromServer
    .getRoleById(id, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedRoleById({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
export const fetchUsersByCompanyId = (id: any, token: any) => (dispatch: any) =>
  requestFromServer
    .getAllUsersByCompanyId(id, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedUsersByCompanyId({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });

