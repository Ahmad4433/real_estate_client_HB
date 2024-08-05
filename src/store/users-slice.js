import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    userName: [],
  },
  reducers: {
    setUSerName(state, action) {
      state.userName = action.payload;
    },
  },
});

export const usersAction = usersSlice.actions;
export default usersSlice;
