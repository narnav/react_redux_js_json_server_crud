import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProds } from './cartAPI';

const initialState = {
  myCart:[ ]
};

export const getProdsAsync = createAsyncThunk(
  'cart/fetchProds',
  async () => {
    const response = await fetchProds();
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    testOnly: (state) => {
      state.myCart.push( {
        "id": 2,
        "desc": "new prodtest - only",
        "price": 1
      })
    },
    initCart: (state) => { //fun time shir
        const temp=JSON.parse(  localStorage.getItem("cart"))
        if (temp){
            state.myCart=temp
        }
      },
    addProd: (state,action) => { //fun time shir
        state.myCart.push(action.payload)
        localStorage.setItem("cart",JSON.stringify( state.myCart))
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProdsAsync.fulfilled, (state,action) => {
        state.myCart=action.payload
      })
  },
});

export const { testOnly,addProd,initCart } = cartSlice.actions;
export const selectCart = (state) => state.cart.myCart;
export default cartSlice.reducer;
