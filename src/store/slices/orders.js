import { createSlice } from '@reduxjs/toolkit';

const initialOrdersState = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: initialOrdersState,
  reducers: {
    order(state, { payload: { cart, userEmail } }) {
      const orderDate = new Date().toLocaleString();
      state.orders.push({ userEmail, createdAt: orderDate, items: cart });
    },
  },
});

export const ordersActions = ordersSlice.actions;
