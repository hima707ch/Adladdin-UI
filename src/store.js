import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice"
import popupSlice from "./slices/popupSlice"

export const store = configureStore({
  reducer: {
    user: userSlice,
    popup: popupSlice
  }
});