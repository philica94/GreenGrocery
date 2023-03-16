import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './slices/auth';
import { cartSlice } from './slices/cart';
import { favouriteSlice } from './slices/favourites';
import { ordersSlice } from './slices/orders';

const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem('applicationState', JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  // console.log(JSON.parse(localStorage.getItem('applicationState')));
  if (localStorage.getItem('applicationState') !== null) {
    return JSON.parse(localStorage.getItem('applicationState')); // re-hydrate the store
  }
};

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
    favourite: favouriteSlice.reducer,
    orders: ordersSlice.reducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
