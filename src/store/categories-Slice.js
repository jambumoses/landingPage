import {createSlice} from "@reduxjs/toolkit";
//import {commerce} from "../components/lib/commerce";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {},
    reducers:{
        getCategories(state,action){
            state.data = action.payload;
        },
    }
});

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice;