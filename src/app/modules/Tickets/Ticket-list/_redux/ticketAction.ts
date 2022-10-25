import * as requestFromServer from "./ticketCrud";
import { TicketSlice, callTypes } from "./ticketSlice";

const { actions } = TicketSlice;



//getAll user details
export const getAllTickets = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllUsers(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.getedAllUsersDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const UpdateTickets = (data: any, id: any, token: any) => (dispatch: any) =>
requestFromServer
  .UpdateTicket(data, id, token)
  .then((response) => {
    const { data } = response;
    dispatch(actions.UpdatedTickets({ data }));
  })
  .catch((error) => {
    // eslint-disable-next-line no-param-reassign
    error.clientMessage = "Can't find";
    dispatch(actions.catchError({ error, callType: callTypes.list }));
  });

  export const getticketStatuses = (token: any) => (dispatch: any) => {
    dispatch(actions.startCall({ callType: callTypes.action }));
    return requestFromServer
      .getticketStatuses(token)
      .then((response) => {
        const { data } = response;
        dispatch(actions.fetchedAllticketStatusesDetails({ data }));
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
  export const getcustomerTo = (token: any) => (dispatch: any) => {
    dispatch(actions.startCall({ callType: callTypes.action }));
    return requestFromServer
      .getcustomerto(token)
      .then((response) => {
        const { data } = response;
        dispatch(actions.fetchedcustomerToDetails({ data }));
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
      dispatch(actions.postticket({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });

    export const getticketsById = (id: any, token: any) => (dispatch: any) => {
      dispatch(actions.startCall({ callType: callTypes.action }));
      return requestFromServer
        .getticketsById(id, token)
        .then((response) => {
          const { data } = response;
          dispatch(actions.fetchedticketsById({ data }));
        })
        .catch((error) => {
          error.clientMessage = "Can't find patient test reports";;
          dispatch(actions.catchError({ error, callType: callTypes.action }));
        });
    
    };
    export const DeleteTickets = (id: any, token: any) => (dispatch: any) =>
  requestFromServer
    .DeleteTicket(id, token)
    .then((response) => {
      const { data } = response;
      console.log(data);
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });