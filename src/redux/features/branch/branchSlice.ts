import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  branch: null,
};
const branchSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setBranch: (state, action) => {
      state.branch = action.payload;
    },
  },
});
export const { setBranch } = branchSlice.actions;
export default branchSlice.reducer;
