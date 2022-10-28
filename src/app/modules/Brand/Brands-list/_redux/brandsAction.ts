import * as requestFromServer from "./brandsCrud";
import { BrandsSlice, callTypes } from "./brandsSlice";

const { actions } = BrandsSlice;



//get leads details
export const getBrands = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllBrands(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllBrandsDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const getBrandsById = (token: any,companyId: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllBrandsById(token,companyId)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllBrandsDetailsById({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

//get source details
export const getsource = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getSource(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllSourceDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};


export const getcampaigns = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getcampaigns(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedcampaignsDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const getcompanies = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllcompanies(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllComapniesDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const getBrandsStatuses = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getBrandsStatuses(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllBrandsStatusesDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};


export const CreateBrands = (data: any, token: any) => (dispatch: any) =>
  requestFromServer
    .CreateBrands(data, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedBrands({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });


export const UpdateBrands= (id: any, data: any, token: any) => (dispatch: any) =>
  requestFromServer
    .UpdateBrands(id, data, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.UpdatedBrands({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });

export const DeleteBrands = (id: any, token: any) => (dispatch: any) =>
  requestFromServer
    .DeleteBrands(id, token)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });

export const deleteSelectedBrands = (id: any, token: any) => (dispatch: any) =>
  requestFromServer
    .deleteSelectedBrands(id, token)
