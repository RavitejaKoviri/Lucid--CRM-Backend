import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialProductsState = {
  Department: [],
  CreateDepartment: [],
  Source: [],
  campaigns: [],
  Comapnies: [],
  DepartmentStatus: [],
  DepartmentById: null,
  UpdatedDepartment: null,
  Loading: false,
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const DepartmentSlice = createSlice({
  name: "DepartmentSlice",
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

    fetchedAllDepartmentDetails: (state, action) => {
      const { data } = action.payload;
      state.Department = data;
    },
    fetchedAllDepartmentDetailsById: (state, action) => {
      const { data } = action.payload;
      state.DepartmentById = data;
    },
    fetchedAllSourceDetails: (state, action) => {
      const { data } = action.payload;
      state.Source = data;
    },
    fetchedcampaignsDetails: (state, action) => {
      const { data } = action.payload;
      state.campaigns = data;
    },
    fetchedAllComapniesDetails: (state, action) => {
      const { data } = action.payload;
      state.Comapnies = data;
    },
    fetchedAllDepartmentStatusesDetails: (state, action) => {
      const { data } = action.payload;
      state.DepartmentStatus = data;
    },
    fetchedDepartment: (state, action) => {
      const { data } = action.payload;
      state.CreateDepartment = data;
    },
    UpdatedDepartment: (state, action) => {
      const { data } = action.payload;
      state.UpdatedDepartment = data;
    },
    fetchedDepartmentLoading: (state, action) => {
      const { data } = action.payload;
      state.Loading = data;
    },
  },
});
