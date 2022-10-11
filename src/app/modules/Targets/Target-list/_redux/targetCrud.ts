import axios from "axios";

export const TARGETS = "targets";


export function fetchAllTargets(token: any) {

  return axios.get(TARGETS, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
