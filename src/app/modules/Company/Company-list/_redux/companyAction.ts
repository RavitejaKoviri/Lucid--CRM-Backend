import * as requestFromServer from "./companyCrud";
import { CompanySlice, callTypes } from "./companySlice";

const { actions } = CompanySlice;



//get leads details
// export const getCompanies = (token: any) => (dispatch: any) => {
//   dispatch(actions.startCall({ callType: callTypes.action }));
//   return requestFromServer
//     .getAllCompanies(token)
//     .then((response) => {
//       const { data } = response;
//       dispatch(actions.fetchedAllCompaniesDetails({ data }));
//     })
//     .catch((error) => {
//       error.clientMessage = "Can't find patient test reports";;
//       dispatch(actions.catchError({ error, callType: callTypes.action }));
//     });
// };

export const getCompaniesById = (id: any, token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllCompaniesById(id, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllCompaniesDetailsById({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

//get brand details

export const getbrand = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getbrand(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllbrandDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
//get users details

export const getusers = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getuser(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAlluserDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};



// export const getcompanies = (token: any) => (dispatch: any) => {
//   dispatch(actions.startCall({ callType: callTypes.action }));
//   return requestFromServer
//     .getAllcompanies(token)
//     .then((response) => {
//       const { data } = response;
//       dispatch(actions.fetchedAllComapniesDetails({ data }));
//     })
//     .catch((error) => {
//       error.clientMessage = "Can't find patient test reports";;
//       dispatch(actions.catchError({ error, callType: callTypes.action }));
//     });
// };
// export const getCompanyStatuses = (token: any) => (dispatch: any) => {
//   dispatch(actions.startCall({ callType: callTypes.action }));
//   return requestFromServer
//     .getCompanyStatuses(token)
//     .then((response) => {
//       const { data } = response;
//       dispatch(actions.fetchedAllcompanyStatusesDetails({ data }));
//     })
//     .catch((error) => {
//       error.clientMessage = "Can't find patient test reports";;
//       dispatch(actions.catchError({ error, callType: callTypes.action }));
//     });
// };


export const CreateCompany = (data: any, token: any) => (dispatch: any) =>
  requestFromServer
    .CreateCompany(data, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.postCompany({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });


export const UpdateCompany = (id: any, data: any, token: any) => (dispatch: any) =>
  requestFromServer
    .UpdateCompany(id, data, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.UpdatedCompany({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });

export const DeleteCompany = (id: any, token: any) => (dispatch: any) =>
  requestFromServer
    .DeleteCompany(id, token)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });

export const deleteSelectedCompany = (id: any, token: any) => (dispatch: any) =>
  requestFromServer
    .deleteSelectedCompany(id, token)
