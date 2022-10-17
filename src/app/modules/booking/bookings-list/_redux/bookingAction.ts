import * as requestFromServer from "./bookingCrud";
import { BookingSlice, callTypes } from "./bookingSlice";

const { actions } = BookingSlice;



//getAll user details
export const getAllBookings = () => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllBooking()
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllBooking({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
//HealthPackagesByBranch
export const fetchHealthPackagesByBranch = (queryParams:any) => (dispatch:any) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getHealthPackageByBranch(queryParams)
    .then((response) => {
      const { data } = response;

      dispatch(actions.packagesByBranch({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find package";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};
//healthscanByBranch
export const fetchHealthScansByBranch = (queryParams:any) => (dispatch:any) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getHealthScanByBranch(queryParams)
    .then((response) => {
      const { data } = response;

      dispatch(actions.healthscanByBranch({data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find package";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};
//BranchwisetestByBranch
export const fetchBranchwisetestByBranch = (queryParams:any) => (dispatch:any) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getBranchwisetestByBranch(queryParams)
    .then((response) => {
      const { data } = response;

      dispatch(actions.branchwisetestByBranch({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find package";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};
//Doctors
export const fetchDoctors = () => (dispatch:any) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getAllDoctor()
    .then((response) => {
      const { data } = response;

      dispatch(actions.doctorsFetched({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find doctors";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};
//city
export const fetchCity = () => (dispatch:any) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getAllCity()
    .then((response) => {
      const { data } = response;

      dispatch(actions.Fetchedcity({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find location";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};
//BranchAddressesByCityId
export const fetchBranchAddressesByCityId = (id:any) => (dispatch:any) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getBranchAddressesByCityId(id)
    .then((response) => {
      const { data } = response;
      dispatch(
        actions.fetchedBranchAddressesByCityId({ data })
      );
    })
    .catch((error) => {
      error.clientMessage = "Can't find branch";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};
//patients
export const fetchPatients = () => (dispatch:any) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getAllPatient()
    .then((response) => {
      const { data } = response;
      dispatch(actions.patientsFetched({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};
//createbooking
export const Createbooking = (data: any, token: any) => (dispatch: any) =>
  requestFromServer
    .Createbooking(data, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.createdbooking({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
    //updatebooking
    export const Updatebooking = (id: any, data: any, token: any) => (dispatch: any) =>
  requestFromServer
    .Updatebooking(id, data, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.Updatedbooking({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
//Deletebooking
export const Deletebooking = (id: any, token: any) => (dispatch: any) =>
  requestFromServer
    .Deletebooking(id, token)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });

export const deleteSelectedbooking = (id: any, token: any) => (dispatch: any) =>
  requestFromServer
    .deleteSelectedbooking(id, token)


    
//getbookingsById
export const getbookingsById = (id: any, token: any) => (dispatch: any) => {
      dispatch(actions.startCall({ callType: callTypes.action }));
      return requestFromServer
        .getAllbookingsById(id, token)
        .then((response) => {
          const { data } = response;
          dispatch(actions.fetchedAllbokkingDetailsById({ data }));
        })
        .catch((error) => {
          error.clientMessage = "Can't find patient test reports";;
          dispatch(actions.catchError({ error, callType: callTypes.action }));
        });
    };