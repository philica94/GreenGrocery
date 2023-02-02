import { createSlice, configureStore, current } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalItemsAmount: 0,
};

const cartSlice = createSlice({
  name: 'updatingCart',
  initialState: initialCartState,
  reducers: {
    addCartItem(state, action) {
      const existingItemCartIndex = state.items.findIndex((item) => item.id === action.payload.id);

      if (existingItemCartIndex !== -1) {
        state.items[existingItemCartIndex].amount++;
      } else {
        state.items = [...state.items, action.payload];
      }
      state.totalItemsAmount += action.payload.amount;
    },
    removeCartItem(state, action) {
      const existingItemCartIndex = state.items.findIndex((item) => item.id === action.payload.id);

      if (state.items[existingItemCartIndex].amount === 1) {
        state.items.splice(existingItemCartIndex, 1);
      } else {
        state.items[existingItemCartIndex].amount--;
      }
      state.totalItemsAmount--;
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export const cartActions = cartSlice.actions;
export default store;
