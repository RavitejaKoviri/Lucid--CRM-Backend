import * as requestFromServer from "./targetCrud";
import { TargetSlice, callTypes } from "./targetSlice";

const { actions } = TargetSlice;


export const getAllTargets = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .fetchAllTargets(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.getedAllUsersDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

//getAll user details
export const gettarget = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getTargets(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetechedalltargets({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};


export const getTargetStatuses = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getTargetStatuses(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedtargetsStatusesDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const getassignedTo = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getassignedto(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedassignedToDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const getCompanies = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllCompanies(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllComapniesDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    })
  };

  export const CreateTarget = (data: any, token: any) => (dispatch: any) =>
  requestFromServer
    .CreateTarget(data, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedTarget({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
    
    export const UpdateTarget = (data: any, id: any, token: any) => (dispatch: any) =>
    requestFromServer
      .UpdateTarget(data, id, token)
      .then((response) => {
        const { data } = response;
        dispatch(actions.Updatedtarget({ data }));
      })
      .catch((error) => {
        // eslint-disable-next-line no-param-reassign
        error.clientMessage = "Can't find";
        dispatch(actions.catchError({ error, callType: callTypes.list }));
      });