import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: false,
    token: null,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setAuth(state, action) {
      state.auth = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
