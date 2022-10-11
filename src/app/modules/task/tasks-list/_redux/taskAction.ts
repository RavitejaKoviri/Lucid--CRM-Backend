import * as requestFromServer from "./taskCrud";
import { ManageTaskSlice, callTypes } from "./taskSlice";

const { actions } = ManageTaskSlice;



//getAll user details
export const getAllTasks = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .fetchAllTasks(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllUsersDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
