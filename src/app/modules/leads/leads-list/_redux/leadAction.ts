import * as requestFromServer from "./leadCrud";
import { LeadSlice, callTypes } from "./leadSlice";

const { actions } = LeadSlice;



//getAll user details
export const getLeads = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllLeads(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.getedAllLeadsDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
