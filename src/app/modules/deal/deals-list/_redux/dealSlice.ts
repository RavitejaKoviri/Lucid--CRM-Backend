import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialProductsState = {
  deals: [],
  Source: [],
  campaigns: [],
  Companies: [],
  dealStatus: [],
  Updateddeals: [],
  dealsById: [],
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const dealsSlice = createSlice({
  name: "dealsSlice",
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


    fetchedalldeals: (state, action) => {
      const { data } = action.payload;
      state.deals = data;
    },
    fetcheddealsById: (state, action) => {
      const { data } = action.payload;
      state.dealsById = data;
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
      state.Companies = data;
    },
    fetchedAllleadStatusesDetails: (state, action) => {
      const { data } = action.payload;
      state.dealStatus = data;
    },
    fetcheddeal: (state, action) => {
      const { data } = action.payload;
      state.deals = data;
    },
    Updateddeal: (state, action) => {
      const { data } = action.payload;
      state.Updateddeals = data;
    },
  },
});
