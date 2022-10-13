import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialProductsState = {
  booking: [],
  packagesByBranch:[],
  healthscanBybranch:[],
  branchwisetestsByBranch:[],
  doctors:[],
  city:[],
  BranchAddressesByCityId:[],
  patient:[],
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const BookingSlice = createSlice({
  name: "BookingSlice",
  initialState: initialProductsState,

  reducers: {
    catchError: (state: any, action: any) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state: any, action: any) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },

    fetchedAllBooking: (state, action) => {
      const { data } = action.payload;
      state.booking = data;
    },
//   packagesByBranch
 packagesByBranch: (state, action) => {
  const { data } = action.payload;
  state.packagesByBranch = data;
},
//getHealthScanByBranch
healthscanByBranch: (state, action) => {
  const { data } = action.payload;
  state.healthscanBybranch = data;
},
//branchwisetestByBranch
branchwisetestByBranch: (state, action) => {
  const { data } = action.payload;
  state.branchwisetestsByBranch = data;
},
//doctors
doctorsFetched: (state, action) => {
  const { data } = action.payload;
  state.doctors = data;
},
//city
Fetchedcity: (state, action) => {
  const { data } = action.payload;
  state.city = data;
},
//BranchAddressesByCityId
fetchedBranchAddressesByCityId: (state, action) => {
  const { data } = action.payload;
  state.BranchAddressesByCityId = data;
},
//patient
patientsFetched: (state, action) => {
  const { data } = action.payload;
  state.patient = data;
},
  },
});
