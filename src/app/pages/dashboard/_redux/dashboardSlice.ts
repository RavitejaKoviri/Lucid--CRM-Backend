import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialProductsState = {
  booking: [],
  Contacts: [],
  Tasks: [],
  Leads: [],
  campaigns: [],
  deals: []
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const DashboardSlice = createSlice({
  name: "DashboardSlice",
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
    fetchedAllDeals: (state, action) => {
      const { data } = action.payload;
      state.deals = data;
    },
    fetchedAllTasks: (state, action) => {
      const { data } = action.payload;
      state.Tasks = data;
    },
    fetchedAllContacts: (state, action) => {
      const { data } = action.payload;
      state.Contacts = data;
    },
    fetchedAllCampaigns: (state, action) => {
      const { data } = action.payload;
      state.campaigns = data;
    },
    fetchedAllLeads: (state, action) => {
      const { data } = action.payload;
      state.Leads = data;
    }
  },
});
