import { createSlice } from "@reduxjs/toolkit";

const modelSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    setIsOpen(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export const modalActions = modelSlice.actions;
export default modelSlice;
