import {createSlice} from "@reduxjs/toolkit";
import CONSTANTS from "../components/lib/ConstactInformation";

const constantSlice = createSlice({
    name: "constant",
    initialState: {data: CONSTANTS},
    reducers:{
        updateConstants(state,action){
            state.data = action.payload;
        },
    }
});

export const constantActions = constantSlice.actions;
export default constantSlice;