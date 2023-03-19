import { configureStore } from "@reduxjs/toolkit";

import bannerSlice from "./BannerSlice";
import BrandsSlice from "./BrandsSlice";
import cartSlice from "./CartSlice";
import productSlice from "./productSlice";
import categoriesSlice from "./categoriesSlice";
import merchantSlice from "./merchantSlice";

import constantSlice from "./constantSlice";
import messagesSlice from "./MessagesSlice";
import emailSlice from "./EmailListingSlice";

const store = configureStore({
  reducer: {
    constant: constantSlice.reducer,
    cart: cartSlice.reducer,
    banner: bannerSlice.reducer,
    brands: BrandsSlice.reducer,
    products: productSlice.reducer,
    categories: categoriesSlice.reducer,
    merchant: merchantSlice.reducer,
    messages: messagesSlice.reducer,
    emails: emailSlice.reducer,
  },
});

export default store;
