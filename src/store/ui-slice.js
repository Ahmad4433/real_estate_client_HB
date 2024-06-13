import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { loading: false, error: null },
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
