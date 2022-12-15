import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProds } from './cartAPI';

const initialState = {
    myCart: [],
    updCartFlag:false
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
            state.myCart.push({
                "id": 2,
                "desc": "new prodtest - only",
                "price": 1
            })
        },
        initCart: (state) => { //fun time shir
            const temp = JSON.parse(localStorage.getItem("cart"))
            if (temp) {
                state.myCart = temp
            }
        },
        addProd: (state, action) => { //run when add/update amount
            
            const item=action.payload.item
            const amount =action.payload.amount
            state.updCartFlag =! state.updCartFlag
            // check if exist
            const tempItemAr=state.myCart.filter(x => x.id === item.id)
            if (tempItemAr.length > 0) {
                
                console.log(tempItemAr[0].amount + amount )
                console.log((tempItemAr[0].amount + amount) ==0)
                if((tempItemAr[0].amount + amount) ==0){
                    state.myCart=state.myCart.filter(x=>x.id !== item.id)
                }
                else
                {
                    tempItemAr[0].amount+=amount
                }
            }
            else {//not exist in my cart
                if (amount ===-1)return
                const tempProd={desc: item.desc,price:item.price,id:item.id,amount:1}
                state.myCart.push(tempProd)
            }
            localStorage.setItem("cart", JSON.stringify(state.myCart))
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProdsAsync.fulfilled, (state, action) => {
                state.myCart = action.payload
            })
    },
});

export const { testOnly, addProd, initCart } = cartSlice.actions;
export const selectCart = (state) => state.cart.myCart;
export const selectupdCartFlag = (state) => state.cart.updCartFlag;

export default cartSlice.reducer;
