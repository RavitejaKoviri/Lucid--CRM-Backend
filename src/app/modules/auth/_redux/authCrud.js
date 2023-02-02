import axios from "axios";

// export const LOGIN_URL = "api/auth/login";
export const LOGIN_URL = "http://103.195.244.172:4377/auth/local";
export const UPDATE = "/users";

export const REGISTER_URL = "api/auth/register";
export const REQUEST_PASSWORD_URL = "api/auth/forgot-password";

export const ME_URL = "api/me";
export const USER_ROLES_URL = "users-permissions/roles";

//14&15
export const REQUEST_FORGOT_PASSWORD_API = "/local/forgot-password";
export const RESET_PASSWORD_API = "/local/reset-password";

export function login(email, password) {
  const identifier = email;
  axios.defaults.headers = {
    Authorization: "",
  };
  return axios.post(LOGIN_URL, { identifier, password });
}

export function setUserProfile(id, user) {
  console.log(id, user);
  return axios.put(`${UPDATE}/${id}`, { user });
}

export function register(email, fullname, username, password) {
  return axios.post(REGISTER_URL, { email, fullname, username, password });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}
// 32-39
export function forgotPasswordss(identifier) {
  return axios.post(REQUEST_FORGOT_PASSWORD_API, { identifier });
}

export function resetPassword(password, passwordConfirmation, code) {
  return axios.post(RESET_PASSWORD_API, {
    password,
    passwordConfirmation,
    code,
  });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL);
}

// export function getUserRolesByToken(user) {
//   console.log("called", user.payload.user.payload.user.role.id)
//   // Authorization head should be fulfilled in interceptor.
//   return axios.get(`${USER_ROLES_URL}/${user.payload.user.payload.user.role.id}`);
// }
