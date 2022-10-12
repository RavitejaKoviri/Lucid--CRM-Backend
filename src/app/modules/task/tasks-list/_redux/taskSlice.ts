import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialProductsState = {
  Tasks: [],
  taskStatus:[],
  Comapnies:[],
  taskcontact:[],
  CreateTask: [],

};

export const callTypes = {
  list: "list",
  action: "action",
};

export const TaskSlice = createSlice({
  name: "TaskSlice",
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

    fetchedAllUsersDetails: (state, action) => {
      const { data } = action.payload;
      state.Tasks = data;
    },
    fetchedtaskcompanies: (state, action) => {
      const { data } = action.payload;
      state.Comapnies = data;
    },
    fetchedAlltaskStatus: (state, action) => {
      const { data } = action.payload;
      state.taskStatus = data;
    },
    fetchedgettaskcontact: (state, action) => {
      const { data } = action.payload;
      state.taskcontact = data;
    },
    createdtask: (state, action) => {
      const { data } = action.payload;
      state.CreateTask = data;
    },
  },
});
