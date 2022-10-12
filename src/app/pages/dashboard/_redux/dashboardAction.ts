import * as requestFromServer from "./dashboardCrud";
import { DashboardSlice, callTypes } from "./dashboardSlice";

const { actions } = DashboardSlice;



//getAll user details
export const getAllBookings = () => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .fetchAllBookings()
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllBooking({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const getAllTasks = (token:any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .fetchAllTasks(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllTasks({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const getAllDeals = (token:any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .fetchAllDeals(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllDeals({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const getAllContacts = (token:any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .fetchAllContacts(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllContacts({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const getAllCampaigns = (token:any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .fetchAllCampaigns(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllCampaigns({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const getAllLeads = (token:any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .fetchAllLeads(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllLeads({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
