import axios from "axios";

export const EMAIL = "emails";


export function postEmail(data: any, token: any) {

  return axios.post(EMAIL, data, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
