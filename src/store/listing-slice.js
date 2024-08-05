import { createSlice } from "@reduxjs/toolkit";

const listingSlice = createSlice({
  name: "listing",
  initialState: {
    updateDoc: {},
    updateUser: {},
  },
  reducers: {
    setUpdateDoc(state, action) {
      state.updateDoc = action.payload;
    },
    setUpdateUser(state, action) {
      state.updateUser = action.payload;
    },
  },
});

export const listingSliceAction = listingSlice.actions;
export default listingSlice;
