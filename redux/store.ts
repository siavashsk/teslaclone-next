import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import { api } from "./api";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
