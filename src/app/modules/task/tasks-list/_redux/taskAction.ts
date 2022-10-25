import * as requestFromServer from "./taskCrud";
import { TaskSlice, callTypes } from "./taskSlice";

const { actions } = TaskSlice;



//getAll user details
export const getAllTasks = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .fetchAllTasks(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllUsersDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const gettaskcompanies = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllcompanies(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedtaskcompanies({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const gettaskStatus = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .gettaskStatus(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAlltaskStatus({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const gettaskcontact = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .gettaskcontacts(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedgettaskcontact({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const CreateTask = (data: any, token: any) => (dispatch: any) =>
  requestFromServer
    .CreateTask(data, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.createdtask({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });

    export const UpdateTask = (data: any, id: any, token: any) => (dispatch: any) =>
    requestFromServer
      .UpdateTasks(data, id, token)
      .then((response) => {
        const { data } = response;
        dispatch(actions.Updatedtask({ data }));
      })
      .catch((error) => {
        // eslint-disable-next-line no-param-reassign
        error.clientMessage = "Can't find";
        dispatch(actions.catchError({ error, callType: callTypes.list }));
      });