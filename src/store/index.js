import { configureStore } from "@reduxjs/toolkit";
import constantSlice from "./constantSlice";
import merchantSlice from "./merchant-slice";
import productSlice from "./products-slice";


const store = configureStore({
    reducer: {
        api : productSlice.reducer,
        constant : constantSlice.reducer,
        merchant : merchantSlice.reducer,
    },
});

export default store;