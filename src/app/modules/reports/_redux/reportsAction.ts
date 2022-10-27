import * as requestFromServer from "./reportsCrud";
import { ReportsSlice, callTypes } from "./reportsSlice";

const { actions } = ReportsSlice;



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
export const getAllTasks = (token: any, companyId: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .fetchAllTasks(token, companyId)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllTasks({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const getAllDeals = (token: any, companyId: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .fetchAllDeals(token, companyId)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllDeals({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const getAllContacts = (token: any, companyId: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .fetchAllContacts(token, companyId)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllContacts({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const getAllCampaigns = (token: any, companyId: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .fetchAllCampaigns(token, companyId)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllCampaigns({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const getAllLeads = (token: any, companyId: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .fetchAllLeads(token, companyId)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllLeads({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const getAllTargets = (token: any, companyId: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .fetchAllTargets(token, companyId)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllTargets({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const getAllTickets = (token: any, companyId: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllTickets(token, companyId)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllTickets({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const LeadsByDate = (date: any, token: any) => (dispatch: any) =>
  requestFromServer
    .getLeadsByDate(date, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedLeadsByDate({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });