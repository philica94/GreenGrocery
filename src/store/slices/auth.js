import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isLoggedIn: false,
  loggedUserEmail: '',
  users: [],
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state, { payload }) {
      state.isLoggedIn = true;
      state.loggedUserEmail = payload.username;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.loggedUserEmail = '';
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
