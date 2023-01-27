import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalItemsAmount: 0,
};

const cartSlice = createSlice({
  name: 'updatingCart',
  initialState: initialCartState,
  reducers: {
    addCartItem(state, action) {
      state.items = [...state.items, action.payload];
      state.totalItemsAmount = state.totalItemsAmount + action.payload.amount;
    },
    removeCartItem() {},
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export const cartActions = cartSlice.actions;
export default store;
