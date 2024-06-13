import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import uiSlice from "./ui-slice";
import chatSlice from "./chat-slice";
import socketSlice from "./socket-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    chat: chatSlice.reducer,
    socket: socketSlice.reducer,
  },
});

export default store;
