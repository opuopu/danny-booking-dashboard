import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: null,
};
const bookingSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setBookingSearch: (state, action) => {
      state.searchTerm = action.payload.trim();
    },
  },
});
export const { setBookingSearch } = bookingSlice.actions;
export default bookingSlice.reducer;
