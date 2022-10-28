import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialProductsState = {
  PostEmail: []
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const ComposeEmailSlice = createSlice({
  name: "ComposeEmailSlice",
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

    fetchedEmail: (state, action) => {
      const { data } = action.payload;
      state.PostEmail = data;
    }
  },
});
