import { createSlice } from '@reduxjs/toolkit';

const initialOrdersState = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: initialOrdersState,
  reducers: {
    order(state, { payload: { filteredCartItems, userEmail } }) {
      const orderDate = new Date().getTime();
      state.orders.push({ userEmail, createdAt: orderDate, items: filteredCartItems });
    },
  },
});

export const ordersActions = ordersSlice.actions;
