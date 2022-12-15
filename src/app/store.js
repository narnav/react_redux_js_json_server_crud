import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../slicers/cartSlice';
import shopReducer from '../slicers/shopSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart:cartReducer,
    shop:shopReducer
  },
});
