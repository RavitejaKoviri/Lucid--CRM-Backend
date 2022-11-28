import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialProductsState = {
  Companies: [],
  Createcompany: [],
  brand: [],
  getusers: [],
  industries: [],
  companyStatus: [],
  CompanyById: null,
  UpdatedCompany: null,
  Loading: false,
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

    // fetchedAllcompanyStatusesDetails: (state, action) => {
    //   const { data } = action.payload;
    //   state.companyStatus = data;
    // },

    postCompany: (state, action) => {
      const { data } = action.payload;
      state.Createcompany = data;
    },
    fetchedAllbrandDetails: (state, action) => {
      const { data } = action.payload;
      state.brand = data;
    },
    fetchedAllindustry: (state, action) => {
      const { data } = action.payload;
      state.industries = data;
    },
    fetchedAlluserDetails: (state, action) => {
      const { data } = action.payload;
      state.getusers = data;
    },
    UpdatedCompany: (state, action) => {
      const { data } = action.payload;
      state.UpdatedCompany = data;
    },
    fetchedComapanyLoading: (state, action) => {
      const { data } = action.payload;
      state.Loading = data;
    },
  },
});
