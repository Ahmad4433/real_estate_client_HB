import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import usersSlice from "./users-slice";
import listingSlice from "./listing-slice";
import searchFilterSlice from "./search-filter";
import dropdownSlice from "./drop-down-slice";
import modelSlice from "./model-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    users: usersSlice.reducer,
    listing: listingSlice.reducer,
    search: searchFilterSlice.reducer,
    dropdown: dropdownSlice.reducer,
    modal: modelSlice.reducer,
  },
});

export default store;
