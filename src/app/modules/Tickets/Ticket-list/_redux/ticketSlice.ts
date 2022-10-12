import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { customers } from "./ticketCrud";

const initialProductsState = {
  Tickets :[],
  CreateTicket :[],
  Companies: [],
  users : [],
  customers :[],
  ticketStatus :[]
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const TicketSlice = createSlice({
  name: "TicketSlice",
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

    fetchedAllComapniesDetails: (state, action) => {
      const { data } = action.payload;
      state.Companies = data;
    },

    fetchedAllUsers: (state, action) => {
      const { data } = action.payload;
      state.users = data;
    },

    fetchedAllcustomers: (state, action) => {
      const { data } = action.payload;
      state.customers = data;
    },
    fetchedTicket: (state, action) => {
      const { data } = action.payload;
      state.CreateTicket = data;
    },
    
    fetchedAllticketStatus: (state, action) => {
      const { data } = action.payload;
      state.ticketStatus = data;
    }, 
    fetchedAllTickets: (state, action) => {
      const { data } = action.payload;
      state.Tickets = data;
    },    

  },
});
