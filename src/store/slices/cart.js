import { createSelector, createSlice } from '@reduxjs/toolkit';
import { FRUIT_PRODUCTS } from '../../data/productsData';
import { getTotalPrice } from '../../utilities/getTotalPrice';

const initialCartState = {
  items: [],
  products: FRUIT_PRODUCTS,
};

export const cartSlice = createSlice({
  name: 'updatingCart',
  initialState: initialCartState,
  reducers: {
    increaseCartItemAmount(state, action) {
      cartSlice.caseReducers.setItemQuantity(state, { payload: { itemId: action.payload, changeAmount: 1 } });
    },
    reduceCartItemAmount(state, action) {
      cartSlice.caseReducers.setItemQuantity(state, { payload: { itemId: action.payload, changeAmount: -1 } });
    },
    removeCartItem(state, action) {
      cartSlice.caseReducers.setItemQuantity(state, { payload: { itemId: action.payload, amount: 0 } });
    },
    removeEntireCart(state) {
      state.items = [];
    },
    addEntireCart(state, action) {
      action.payload.forEach((prod) =>
        cartSlice.caseReducers.setItemQuantity(state, { payload: { itemId: prod.id, changeAmount: prod.amount } })
      );
    },
    setItemQuantity(state, action) {
      const {
        payload: { changeAmount, amount, itemId },
      } = action;

      const existingItemCartIndex = state.items.findIndex(({ id }) => id === itemId);
      const oldAmount = state.items[existingItemCartIndex]?.amount ?? 0;
      const newAmount = amount ?? oldAmount + changeAmount;

      if (newAmount === 0) {
        existingItemCartIndex !== -1 && state.items.splice(existingItemCartIndex, 1);
      } else if (!state.items[existingItemCartIndex]) {
        state.items.push({ id: itemId, amount: newAmount });
      } else {
        state.items[existingItemCartIndex].amount = newAmount;
      }
    },
  },
});

export const selectTotalCartItemsAmount = createSelector(
  (state) => state.cart.items,
  (items) => items.reduce((sum, { amount }) => sum + amount, 0)
);

export const getCartItemsWithDetails = (cartSlice) => {
  return cartSlice.items.map(({ id, amount }) => {
    const productDetails = cartSlice.products.find((prod) => prod.id === id);
    return { amount, ...productDetails };
  });
};

export const selectTotalCartItemsPrice = createSelector(
  (state) => state.cart,
  (cart) => getTotalPrice(getCartItemsWithDetails(cart))
);

export const cartActions = cartSlice.actions;
