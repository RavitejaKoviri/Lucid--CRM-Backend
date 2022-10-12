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

 export const getCompanies = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllCompanies(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllComapniesDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    })
  };

  export const getCampaignStatuses = (token: any) => (dispatch: any) => {
    dispatch(actions.startCall({ callType: callTypes.action }));
    return requestFromServer
      .getCampaignStatuses(token)
      .then((response) => {
        const { data } = response;
        dispatch(actions.fetchedcampaignsStatusesDetails({ data }));
      })
      .catch((error) => {
        error.clientMessage = "Can't find patient test reports";;
        dispatch(actions.catchError({ error, callType: callTypes.action }));
      });
  };

  export const CreateCampaign = (data: any, token: any) => (dispatch: any) =>
  requestFromServer
    .CreateCampaign(data, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedCampaign({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });