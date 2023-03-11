import {createSlice} from "@reduxjs/toolkit";
import image from "../components/img/nobg/PAP2-removebg-preview.png";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories:[]
    }, // end of state
    reducers:{
      getCategories(state,actions){
        state.categories = actions.payload;
      }
    }
});

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice;