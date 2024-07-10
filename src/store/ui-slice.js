import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isLoading: true,
    error: null,
  },
  reducers: {
    setEror(state, action) {
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
