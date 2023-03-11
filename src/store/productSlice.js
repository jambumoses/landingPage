import {createSlice} from "@reduxjs/toolkit";
import image from "../components/img/nobg/77f336891733e356d4d9c8a93ed9c942-removebg-preview.png";

const productSlice = createSlice({
    name: "products",
    initialState: {
        TopSells: [],
        products: []
    },// end of products object
    reducers:{
      getTrends(state,actions){
        state.TopSells = actions.payload;
      },
      getProducts(state,actions){
        state.products = actions.payload;
      }
    }
});

export const productActions = productSlice.actions;
export default productSlice;