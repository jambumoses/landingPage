import {createSlice} from "@reduxjs/toolkit";

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