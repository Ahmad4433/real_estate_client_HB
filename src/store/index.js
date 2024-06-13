import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import uiSlice from "./ui-slice";
import chatSlice from "./chat-slice";
import socketSlice from "./socket-slice";
import messageSlice from "./message-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    chat: chatSlice.reducer,
    socket: socketSlice.reducer,
    message: messageSlice.reducer,
  },
});

export default store;
