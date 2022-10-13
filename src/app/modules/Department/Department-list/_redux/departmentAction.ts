import * as requestFromServer from "./departmentCrud";
import { DepartmentSlice, callTypes } from "./departmentSlice";

const { actions } = DepartmentSlice;



//get leads details
export const getDepartment = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllDepartment(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllDepartmentDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const getDepartmentById = (id: any, token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllDepartmentById(id, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllDepartmentDetailsById({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

//get source details
export const getsource = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getSource(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllSourceDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};


export const getcampaigns = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getcampaigns(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedcampaignsDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const getcompanies = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllcompanies(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllComapniesDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const getDepartmentStatuses = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getDepartmentStatuses(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllDepartmentStatusesDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};


export const CreateDepartment = (data: any, token: any) => (dispatch: any) =>
  requestFromServer
    .CreateDepartment(data, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedDepartment({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });


export const UpdateDepartment= (id: any, data: any, token: any) => (dispatch: any) =>
  requestFromServer
    .UpdateDepartment(id, data, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.UpdatedDepartment({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });

export const DeleteDepartment = (id: any, token: any) => (dispatch: any) =>
  requestFromServer
    .DeleteDepartment(id, token)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });

export const deleteSelectedDepartment = (id: any, token: any) => (dispatch: any) =>
  requestFromServer
    .deleteSelectedDepartment(id, token)
