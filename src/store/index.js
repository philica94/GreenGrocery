import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './slices/auth';
import { cartSlice } from './slices/cart';
import { favouriteSlice } from './slices/favourites';

const store = configureStore({
  reducer: { cart: cartSlice.reducer, auth: authSlice.reducer, favourite: favouriteSlice.reducer },
});

export default store;
