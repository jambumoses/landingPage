import {createSlice} from "@reduxjs/toolkit";
//import {commerce} from "../components/lib/commerce";

/* export async function getStaticProps(){
  const merchant = await commerce.merchants.about();
  const {data: categories} = await commerce.categories.list();
  const {data: products} = await commerce.products.list();

  return{
    props: {
      merchant,
      categories,
      products
    }
  }
} */

//console.log(getStaticProps());

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