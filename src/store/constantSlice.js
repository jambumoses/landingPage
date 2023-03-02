import {createSlice} from "@reduxjs/toolkit";
import CONSTANTS from "../components/lib/ConstactInformation";

const constantSlice = createSlice({
    name: "constant",
    initialState: {
        currentPageTitle: "",
        currentPage: "",
        data: CONSTANTS,
        cartData:{
            shippingFree: {
                raw: 12,
                formatted_with_symbol : "$ 12.00"
            },
            cartCount: 0,
            totalCartPrice: {
                raw: 0,
                formatted_with_symbol : "$ 10"
            },
            cartItems : [
                {
                  id: 1,
                  name: "servitte",
                  category: "servitte",
                  slug: "servitte",
                  description: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity ...",
                  images: {
                    main_url: "",
                    detailed_images:[
                      {id: 1, url: ""},
                      {id: 2, url: ""}
                    ]
                  },
                  quantity: 1,
                  initialPrice: {
                    raw: 100,
                    formatted_with_symbol : "$ 100"
                  },
                  subtotal: {
                    raw: 100,
                    formatted_with_symbol : "$ 100"
                  }
                },
                {
                    id: 13,
                    name: "jambu",
                    category: "servitte",
                    slug: "servitte",
                    description: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity ...",
                    images: {
                      main_url: "",
                      detailed_images:[
                        {id: 1, url: ""},
                        {id: 2, url: ""}
                      ]
                    },
                    quantity: 1,
                    initialPrice: {
                      raw: 100,
                      formatted_with_symbol : "$ 100"
                    },
                    subtotal: {
                      raw: 100,
                      formatted_with_symbol : "$ 100"
                    }
                  },
              ] // end of cart items
        }
    },
    reducers:{
        updateConstants(state,action){
            state.data = action.payload;
        },
        updatePageTitles(state,action){
            state.currentPageTitle = action.payload;
        },
        setCurrentPage(state,action){
            state.currentPage = action.payload;
        },

        
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
            
        }
    }
});

export const constantActions = constantSlice.actions;
export default constantSlice;