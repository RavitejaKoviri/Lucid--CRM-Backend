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