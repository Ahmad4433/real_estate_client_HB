import { createSlice } from "@reduxjs/toolkit";
const socketSlice = createSlice({
  name: "socket",
  initialState: {
    socket: null,
  },
  reducers: {
    setConnection(state, action) {
      state.socket = action.payload;
    },
  },
});
export const socketActions = socketSlice.actions;
export default socketSlice;
