import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './feature/cartSlice/cartSlice';
import customerSlice from './feature/customerSlice/customerSlice';

export const store = configureStore({
  reducer: {
    cartArray:cartSlice,
    customer: customerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch