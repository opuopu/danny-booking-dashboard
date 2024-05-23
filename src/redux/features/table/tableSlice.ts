import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  table1Capacity: 0,
  table2Capacity: 0,
  table3Capacity: 0,
  mergedTables: 0,
  table: null,
};

const tableSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setTable1Capacity: (state, action) => {
      state.table1Capacity = Number(action.payload);
      state.mergedTables =
        state.table1Capacity + state.table2Capacity + state.table3Capacity;
    },
    setTable2Capacity: (state, action) => {
      state.table2Capacity = Number(action.payload);
      state.mergedTables =
        state.table1Capacity + state.table2Capacity + state.table3Capacity;
    },
    setTable3Capacity: (state, action) => {
      state.table3Capacity = Number(action.payload);
      state.mergedTables =
        state.table1Capacity + state.table2Capacity + state.table3Capacity;
    },

    setTable: (state, action) => {
      state.mergedTables =
        action.payload.table1Capacity +
        action.payload.table2Capacity +
        action.payload.table3Capacity;
      const tableData = { ...action.payload };
      delete tableData?.branch;
      state.table = tableData;
    },
  },
});
export const {
  setTable1Capacity,
  setTable2Capacity,
  setTable3Capacity,
  setTable,
} = tableSlice.actions;
export default tableSlice.reducer;
