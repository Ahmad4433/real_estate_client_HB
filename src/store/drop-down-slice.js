import { createSlice } from "@reduxjs/toolkit";

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState: {
    branches: [],
  },
  reducers: {
    setBranches(state, action) {
      state.branches = action.payload;
    },
  },
});

export const dropdownActions = dropdownSlice.actions;
export default dropdownSlice;
