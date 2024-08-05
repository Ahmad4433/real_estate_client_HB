import { createSlice } from "@reduxjs/toolkit";

const searchFilterSlice = createSlice({
  name: "search",
  initialState: {
    filter: null,
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filterActions = searchFilterSlice.actions;
export default searchFilterSlice;
