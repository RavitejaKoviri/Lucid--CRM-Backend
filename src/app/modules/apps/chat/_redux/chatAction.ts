import * as requestFromServer from "./chatCrud";
import { ComposeEmailSlice, callTypes } from "./chatSlice";

const { actions } = ComposeEmailSlice;



//getAll user details
export const CreateEmail = (data: any, token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .postEmail(data, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedEmail({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
