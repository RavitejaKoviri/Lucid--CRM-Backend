import * as requestFromServer from "./targetCrud";
import { TargetSlice, callTypes } from "./targetSlice";

const { actions } = TargetSlice;



//getAll user details
export const getAllTargets = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .fetchAllTargets(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.getedAllUsersDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
