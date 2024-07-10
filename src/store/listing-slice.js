import { createSlice } from "@reduxjs/toolkit";
const listingSlice = createSlice({
  name: "listing",
  initialState: {
    title: "",
    detail: "",
    price: "",
    area: "",
    unit: "",
    features: [],
    nearBy: [],
    branch: "",
    purpose: "",
    type: "",
    images: [],
    video: "",
    user: "",
  },
  reducers: {
    setTitle(state,action){
        state.title = action.payload
    },
    setDetail(state,action){
        state.detail = action.payload
    },
    setPrice(state){
        state.price = action.payload
    },
    setArea(state,action){
        state.area = action.payload
    },
    setUnit(state,action){
        state.unit = action.payload
    }
  },
});

export const listingActions = listingSlice.actions;
export default listingSlice;
