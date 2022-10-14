import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialProductsState = {
  Contacts: [],
  Source: [],
  campaigns: [],
  Comapnies: [],
  Createcontact: [],
  ContactById: null,
  UpdatedContact: null
};

export const callTypes = {
  list: "list",
  action: "action"
};

export const ContactSlice = createSlice({
  name: "ManageUserSlice",
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

    getedAllContactsDetails: (state, action) => {
      const { data } = action.payload;
      state.Contacts = data;
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

    fetchedContact: (state, action) => {
      const { data } = action.payload;
      state.Createcontact = data;
    },

    fetchedAllContactDetailsById: (state, action) => {
      const { data } = action.payload;
      state.ContactById = data;
    },
    UpdatedContact: (state, action) => {
      const { data } = action.payload;
      state.UpdatedContact = data;
    },

  },
});


