import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialProductsState = {
  campaign: [],
  campaignStatus: [],
  Comapnies : [],
  Createcampaign : [],
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const CampaignSlice = createSlice({
  name: "CampaignSlice",
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

    fetchedAllCampaign: (state, action) => {
      const { data } = action.payload;
      state.campaign = data;
    },
    fetchedcampaignsStatusesDetails: (state, action) => {
      const { data } = action.payload;
      state.campaignStatus = data;
    },
    fetchedAllComapniesDetails: (state, action) => {
      const { data } = action.payload;
      state.Comapnies = data;
    },
    fetchedCampaign: (state, action) => {
      const { data } = action.payload;
      state.Createcampaign = data;
    },
   
  },
});
