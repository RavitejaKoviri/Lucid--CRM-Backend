import axios from "axios";

const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGYwY2ViYmNhZmFkMTBkNjc2MjU5NiIsImlhdCI6MTY2NTQwMTE1OCwiZXhwIjoxNjY3OTkzMTU4fQ.F2z1tVzyk97WvI2Ee6cfqfyRiV8D4aO9UNoh7W_sVw0"


export function getAllBooking() {

  return axios.get("http://43.205.49.41:5377/appointments", {
    headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
  });
}
