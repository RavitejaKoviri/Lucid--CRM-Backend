import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialProductsState = {
  Brands: [],
  CreateBrands: [],
  Source: [],
  campaigns: [],
  Comapnies: [],
  BrandsStatus: [],
  BrandsById: null,
  UpdatedBrands: null,
  Loading: false,
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const BrandsSlice = createSlice({
  name: "BrandsSlice",
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

    fetchedAllBrandsDetails: (state, action) => {
      const { data } = action.payload;
      state.Brands = data;
    },
    fetchedAllBrandsDetailsById: (state, action) => {
      const { data } = action.payload;
      state.BrandsById = data;
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
    fetchedAllBrandsStatusesDetails: (state, action) => {
      const { data } = action.payload;
      state.BrandsStatus = data;
    },
    fetchedBrands: (state, action) => {
      const { data } = action.payload;
      state.CreateBrands = data;
    },
    UpdatedBrands: (state, action) => {
      const { data } = action.payload;
      state.UpdatedBrands = data;
    },
    fetchedBrandsLoading: (state, action) => {
      const { data } = action.payload;
      state.Loading = data;
    },
  },
});
