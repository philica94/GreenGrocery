import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isLoggedIn: false,
  users: [],
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
    signUp(state, { payload }) {
      const existingUserIndex = state.users.findIndex(({ username }) => username === payload.username);

      if (existingUserIndex === -1) {
        state.users.push(payload);
      }
    },
  },
});

export const authActions = authSlice.actions;
