import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialProductsState = {
  target: [],
  Targets:[],
  Createtarget:[],
  
  campaigns: [],
  Comapnies: [],
  targetStatus: [],
  assignedTo: [],
  Updatetarget:[],
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const TargetSlice = createSlice({
  name: "TargetSlice",
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

    fetechedalltargets: (state, action) => {
      const { data } = action.payload;
      state.target = data;
    },
   
    fetchedAllComapniesDetails: (state, action) => {
      const { data } = action.payload;
      state.Comapnies = data;
    },
    fetchedtargetsStatusesDetails: (state, action) => {
      const { data } = action.payload;
      state.targetStatus = data;
    },
    fetchedassignedToDetails: (state, action) => {
      const { data } = action.payload;
      state.assignedTo = data;
    },
    fetchedTarget: (state, action) => {
      const { data } = action.payload;
      state.Createtarget = data;
    },
    getedAllUsersDetails: (state, action) => {
      const { data } = action.payload;
      state.Targets = data;
    },
    Updatedtarget: (state, action) => {
      const { data } = action.payload;
      state.Updatetarget = data;
    },
  },
});

