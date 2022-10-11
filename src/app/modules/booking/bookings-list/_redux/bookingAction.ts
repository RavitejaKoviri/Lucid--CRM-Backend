import * as requestFromServer from "./bookingCrud";
import { BookingSlice, callTypes } from "./bookingSlice";

const { actions } = BookingSlice;



//getAll user details
export const getAllBookings = () => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllBooking()
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllBooking({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
