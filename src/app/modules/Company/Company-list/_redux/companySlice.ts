import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialProductsState = {
  Companies: [],
  Createcompany: [],
  Source: [],
  campaigns: [],
  Comapnies: [],
  companyStatus: [],
  CompanyById: null,
  UpdatedCompany: null,
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const CompanySlice = createSlice({
  name: "CompanySlice",
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

    fetchedAllCompaniesDetails: (state, action) => {
      const { data } = action.payload;
      state.Companies = data;
    },
    fetchedAllCompaniesDetailsById: (state, action) => {
      const { data } = action.payload;
      state.CompanyById = data;
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
    fetchedAllcompanyStatusesDetails: (state, action) => {
      const { data } = action.payload;
      state.companyStatus = data;
    },
    fetchedCompany: (state, action) => {
      const { data } = action.payload;
      state.Createcompany = data;
    },
    UpdatedCompany: (state, action) => {
      const { data } = action.payload;
      state.UpdatedCompany = data;
    },
  },
});
