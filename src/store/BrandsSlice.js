import { createSlice } from "@reduxjs/toolkit";
import img from "../components/img/Picture4.jpg";

const BrandsSlice = createSlice({
  name: "brands",
  initialState: {
    brands: {
      heading: "Brands",
      brands: [],
    },
  }, // end of state
  reducers: {
    getBrands(state, actions) {
      state.brands.brands = actions.payload;
    },
  },
});

export const BrandsActions = BrandsSlice.actions;
export default BrandsSlice;
