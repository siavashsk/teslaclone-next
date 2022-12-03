import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AuthState {
  user: null | any;
  token: string | null;
}

const initialState = {
  user: null,
  token: null,
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.token = token;
      if (user) {
        state.user = user;
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectAuthState = (state: RootState) => state.auth;
