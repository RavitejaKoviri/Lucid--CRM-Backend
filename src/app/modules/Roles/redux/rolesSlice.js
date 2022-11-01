import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialProductsState = {
  Users: [],
  Modules:[],
  UserById:[]
  
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const RolesSlice = createSlice({
  name: "RolesSlice",
  initialState: initialProductsState,

  reducers: {
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },

    fetchedAllUsers: (state, action) => {
      const { data } = action.payload;
      state.Users = data;
    },
    fetchedAllModules: (state, action) => {
      const { data } = action.payload;
      state.Modules = data;
    },
    fetchedUserById: (state, action) => {
      const { data } = action.payload;
      state.UserById = data;
    }
},
});