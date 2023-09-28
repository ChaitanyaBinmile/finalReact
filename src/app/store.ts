import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './feature/likeSlice/cartSlice';

export const store = configureStore({
  reducer: {
    cartArray:cartSlice
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch