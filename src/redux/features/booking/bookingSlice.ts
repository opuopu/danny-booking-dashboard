import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
interface BookingState {
  searchTerm: string | null;
  arrivalTime: string | null;
  expiryTime: string | null;
  branch: string | null;
  date: string | null;
}
const initialState: BookingState = {
  searchTerm: null,
  arrivalTime: null,
  expiryTime: null,
  branch: null,
  date: dayjs().format("YYYY-MM-DD"),
};
const bookingSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setBookingSearch: (state, action) => {
      state.searchTerm = action.payload.trim();
    },
    setBookingFiletring: (state, action) => {
      const { searchTerm, ...filters } = action.payload;
      // Update searchTerm separately
      if (searchTerm !== undefined) {
        state.searchTerm = searchTerm;
      }
      Object.keys(filters).forEach((key) => {
        if (key in state) {
          state[key as keyof BookingState] = action.payload[key];
        }
      });
    },
  },
});
export const { setBookingSearch, setBookingFiletring } = bookingSlice.actions;
export default bookingSlice.reducer;
