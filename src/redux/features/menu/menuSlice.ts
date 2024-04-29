import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: null,
  categoryTitle: null,
};
const menuSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setCategoryDetails: (state, action) => {
      state.categoryId = action.payload.categoryId;
      state.categoryTitle = action.payload.categoryTitle;
    },
  },
});
export const { setCategoryDetails } = menuSlice.actions;
export default menuSlice.reducer;
