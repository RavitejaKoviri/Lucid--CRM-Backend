import * as requestFromServer from "./campaignCrud";
import { CampaignSlice, callTypes } from "./campaignSlice";

const { actions } = CampaignSlice;



//getAll user details
export const getAllCampaigns = (token: any) => (dispatch: any) => {
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

export const getCampaignById = (id: any, token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getCampaignsById(id, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllCampaignDetailsById({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const UpdateCampaign = (id: any, data: any, token: any) => (dispatch: any) =>
  requestFromServer
    .UpdateCampaign(id, data, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.UpdatedCampaign({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });

export const DeleteCampaign = (id: any, token: any) => (dispatch: any) =>
  requestFromServer
    .DeleteCampaign(id, token)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });

export const deleteSelectedCampaigns = (id: any, token: any) => (dispatch: any) =>
  requestFromServer
    .deleteSelectedCampaign(id, token)

export const CampaignLoading = (data: any) => async (dispatch: any) => dispatch(actions.fetchedCampaignLoading({ data }));