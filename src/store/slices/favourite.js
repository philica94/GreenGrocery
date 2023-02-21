import { createSlice, current } from '@reduxjs/toolkit';

const initialFavouriteState = {
  id: [],
};

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: initialFavouriteState,
  reducers: {
    toggleFavourite(state, { payload }) {
      const existingFavouriteIndex = state.id.findIndex((id) => id === payload);

      if (existingFavouriteIndex !== -1) {
        state.id.splice(existingFavouriteIndex, 1);
      } else {
        state.id.push(payload);
      }
    },
  },
});

export const favouriteActions = favouriteSlice.actions;
