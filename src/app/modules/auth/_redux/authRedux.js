

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { put, takeLatest } from "redux-saga/effects";
import { getUserByToken, getUserRolesByToken } from "./authCrud";

export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
  Register: "[Register] Action",
  UserRequested: "[Request User] Action",
  UserRolesRequested: "[Request User Roles] Action",
  UserLoaded: "[Load User] Auth API",
  SetUser: "[Set User] Action",
  UserRolesLoaded: "[ User Roles Loaded] Action",
};

const initialAuthState = {
  user: undefined,
  authToken: undefined,
  userRoles: undefined,
};

export const reducer = persistReducer(
  { storage, key: "root", whitelist: ["user", "authToken", "bookingsCC", "dashboardData"] },
  (state = initialAuthState, action) => {
    switch (action.type) {
      case actionTypes.Login: {
        const { authToken } = action.payload;

        return { authToken, user: undefined };
      }

      case actionTypes.Register: {
        const { authToken } = action.payload;

        return { authToken, user: undefined };
      }

      case actionTypes.Logout: {
        // TODO: Change this code. Actions in reducer aren't allowed.
        return initialAuthState;
      }

      case actionTypes.UserLoaded: {
        const { user } = action.payload;
        return { ...state, user };
      }
      case actionTypes.UserRolesLoaded: {
        const { userRoles } = action.payload;
        const { user } = action.payload;
        return { ...state, userRoles, user };
      }

      case actionTypes.SetUser: {
        const { user } = action.payload;
        return { ...state, user };
      }

      default:
        return state;
    }
  }
);

export const actions = {
  login: (authToken) => ({ type: actionTypes.Login, payload: { authToken } }),
  register: (authToken) => ({
    type: actionTypes.Register,
    payload: { authToken },
  }),
  logout: () => ({ type: actionTypes.Logout }),
  requestUser: (user) => ({
    type: actionTypes.UserRequested,
    payload: { user },
  }),
  // requestUserRoles: (user) => ({

  //   type: actionTypes.UserRolesRequested,
  //   payload: { user },
  // }),
  fulfillUser: (user) => (
    console.log("hey buddy im in authredux"), { type: actionTypes.UserLoaded, payload: { user } }),
  //  fulfillUserRoles: (userRoles,user) => ({ type: actionTypes.UserRolesLoaded, payload: { userRoles,user } }),

  setUser: (user) => ({ type: actionTypes.SetUser, payload: { user } }),
};

export function* saga() {
  // yield takeLatest(actionTypes.Login, function* loginSaga() {

  // });

  yield takeLatest(actionTypes.UserLoaded, function* FulfillUser(user) {
    // yield put(actions.requestUser());
    // yield put(actions.requestUserRoles(user));
    // yield put();
  });

  // yield takeLatest(actionTypes.Register, function* registerSaga() {
  //   // yield put(actions.requestUser());
  //   // yield put(actions.requestUserRoles());

  // });

  yield takeLatest(actionTypes.UserRequested, function* userRequested() {
    const { data: user } = yield getUserByToken();

    yield put(actions.fulfillUser(user));
  });

  // yield takeLatest(actionTypes.UserRolesRequested, function* userRolesRequested(user) {
  //   const { data: userRoles } = yield getUserRolesByToken(user);
  //   const userdata = user.payload.user.payload.user;
  //   yield put(actions.fulfillUserRoles(userRoles,userdata));
  // });
}
