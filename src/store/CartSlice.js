import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartData:{
            shippingFree: {
                raw: 12,
                formatted_with_symbol : "$ 15.00"
            },
            cartCount: 0,
            totalCartPrice: {
                raw: 0,
                formatted_with_symbol : "$ 120"
            },
            cartItems : [] // end of cart items
        }
    },
    reducers:{
        
        /* cart methods */
        updateCartCount(state,action){
            state.cartData.cartCount = state.cartData.cartItems.length;
        },
        updateSubtotal(state){
            state.cartData.cartItems.forEach((cartItem)=>{
                const realPrice = cartItem.initialPrice.raw;
                const quantity = cartItem.quantity;
                const subtotal = realPrice * quantity;

                cartItem.subtotal.raw = subtotal;
                cartItem.subtotal.formatted_with_symbol = "$ "+subtotal;
            })
        },
        cartTotal(state){
            state.cartData.cartItems.forEach((cartTotals)=>{
                const cart_total = cartTotals.subtotal.raw += cartTotals.subtotal.raw
                state.cartData.totalCartPrice.raw = cart_total;
                state.cartData.totalCartPrice.formatted_with_symbol = "$ "+cart_total;
            })
        },
        addFromCart(state,action){
            state.cartData.cartItems.forEach((cartItem)=>{
                if (cartItem.id == action.payload){
                    cartItem.quantity += 1
                }
            })
        },
        reduceFromCart(state,action){
            state.cartData.cartItems.forEach((cartItem)=>{
                if (cartItem.id == action.payload){
                    cartItem.quantity -= 1
                }
            })
        },
        removeFromCart(state,action){
            const cartList = state.cartData.cartItems;
            for( var i = 0; i < cartList.length; i++){
                if(cartList[i].id == action.payload){
                    cartList.splice(cartList[i], 1); 
                }
            }   
        },
        addToCart(state,action){
            state.cartData.cartItems.push(action.payload)
        }
    } // end of reducer
});

export const cartActions = cartSlice.actions;
export default cartSlice;