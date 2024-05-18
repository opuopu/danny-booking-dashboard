import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  table1Capacity: 0,
  table2Capacity: 0,
  mergedTables: 0,
};

const tableSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setTable1Capacity: (state, action) => {
      state.table1Capacity = Number(action.payload);
      state.mergedTables = state.table1Capacity + state.table2Capacity;
    },
    setTable2Capacity: (state, action) => {
      state.table2Capacity = Number(action.payload);
      state.mergedTables = state.table1Capacity + state.table2Capacity;
    },
  },
});
export const { setTable1Capacity, setTable2Capacity } = tableSlice.actions;
export default tableSlice.reducer;
