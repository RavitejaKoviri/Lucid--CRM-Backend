import * as requestFromServer from "./contactCrud";
import { ContactSlice, callTypes } from "./contactSlice";

const { actions } = ContactSlice;



//getAll user details
export const getAllContacts = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllContacts(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.getedAllContactsDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
