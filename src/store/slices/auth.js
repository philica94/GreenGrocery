import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
