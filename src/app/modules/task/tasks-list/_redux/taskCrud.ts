import axios from "axios";

export const TASKS = "tasks";


export function fetchAllTasks(token: any) {

  return axios.get(TASKS, {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
