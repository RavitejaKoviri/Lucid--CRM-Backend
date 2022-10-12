import * as requestFromServer from "./ticketCrud";
import { TicketSlice, callTypes } from "./ticketSlice";

const { actions } = TicketSlice;



//getAll user details
export const getcompany = (token: any) => (dispatch: any) => {
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

export const getAllUsers = (token: any) => (dispatch: any) => {
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


export const getAllcustomers = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllcustomers(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllcustomers({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};


export const CreateTicket = (data: any, token: any) => (dispatch: any) =>
  requestFromServer
    .CreateTicket(data, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedTicket({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });

export const getAllticketStatus = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllticketStatus(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllticketStatus({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const getAllTickets = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllTickets(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllTickets({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};