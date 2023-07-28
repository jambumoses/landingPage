import { createSlice } from "@reduxjs/toolkit";
import CONSTANTS from "../components/lib/ConstactInformation";

const constantSlice = createSlice({
  name: "constant",
  initialState: {
    currentPageTitle: "",
    currentPage: "",
    webDescription: "eudaimonia enterprises Distributor LTD. your reliable partner",
    webKeywords:
      "eudaimonia,eudaimonia.com, enterprises Distributor LTD,LTD, Distributor,enterprises",
    webAuthor: "www.jambumoses.com",
    data: CONSTANTS,
  },
  reducers: {
    updateConstants(state, action) {
      state.data = action.payload;
    },
    updatePageTitles(state, action) {
      state.currentPageTitle = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const constantActions = constantSlice.actions;
export default constantSlice;
