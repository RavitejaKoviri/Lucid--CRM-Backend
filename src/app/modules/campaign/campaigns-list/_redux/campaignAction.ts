import * as requestFromServer from "./campaignCrud";
import { CampaignSlice, callTypes } from "./campaignSlice";

const { actions } = CampaignSlice;



//getAll user details
export const getAllCampaigns = (token:any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllCampaign(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllCampaign({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
