import {createSlice} from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: "api",
    initialState: {},
    reducers:{
        getProducts(state,action){
            state.products = action.payload;
        },
        addToCart(state,action){},
        removeFromCart(state,action){},
        clearCart(state,action){},
    }
});

export const productActions = productSlice.actions;
export default productSlice;