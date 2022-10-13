import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialProductsState = {
  Sources: [],
  Createsource: [],
  Source: [],
  campaigns: [],
  Comapnies: [],
  sourceStatus: [],
  SourcesById: null,
  UpdatedSource: null,
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const sourceSlice = createSlice({
  name: "sourceSlice",
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

    fetchedAllSourcesDetails: (state, action) => {
      const { data } = action.payload;
      state.Sources = data;
    },
    fetchedAllSourcesDetailsById: (state, action) => {
      const { data } = action.payload;
      state.SourcesById = data;
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
    fetchedAllsourceStatusesDetails: (state, action) => {
      const { data } = action.payload;
      state.sourceStatus = data;
    },
    fetchedSource: (state, action) => {
      const { data } = action.payload;
      state.Createsource = data;
    },
    UpdatedSource: (state, action) => {
      const { data } = action.payload;
      state.UpdatedSource = data;
    },
  },
});
