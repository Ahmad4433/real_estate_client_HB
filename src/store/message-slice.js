import { createSlice } from "@reduxjs/toolkit";
const messageSlice = createSlice({
  name: "message",
  initialState: { conversion: [] },
  reducers: {
    setConversion(state, action) {
      state.conversion = action.payload;
    },
  },
});

export default messageSlice;
export const messageActions = messageSlice.actions;
