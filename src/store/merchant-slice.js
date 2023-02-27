import {createSlice} from "@reduxjs/toolkit";
import {commerce} from "../components/lib/commerce";

/* const fetchMerchant = async () => {
    const merchant = await commerce.merchants.about();
    return merchant
} */

const merchantSlice = createSlice({
    name: "merchant",
    initialState: {data: "fetchMerchant()"},
    reducers:{
        getMerchant(state,action){
            state.data = action.payload;
        },
    }
});

export const merchantActions = merchantSlice.actions;
export default merchantSlice;