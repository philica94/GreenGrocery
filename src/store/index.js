import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/auth';
import { cartSlice } from './slices/cart';

const store = configureStore({
  reducer: { cart: cartSlice.reducer, auth: authSlice.reducer },
});

export default store;
