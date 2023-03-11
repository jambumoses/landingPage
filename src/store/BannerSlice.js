import { createSlice } from "@reduxjs/toolkit";

//import img from "../components/img/nobg/50233e9f6cc82aeccb43483efff43623-removebg-preview.png";
//import aboutimage from "../components/img/pic3.jpg";


const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    // home banner
    homeBanner: [],

    // about banner
    aboutBanner: {
      title: {
        content: "",
        color: "",
      },
      image: {
        url: '',
      },
    },

    // brands banner
    brandsBanner: {
      title: {
        content: "",
        color: "",
      },
      description: {
        content:
          "",
        color: "",
      },
      image: {
        url: "",
      },
      backgroundColor: "",
    },

    // contact banner
    contactBanner: {
      title: {
        content: "",
        color: "",
      },
      description: {
        content: "",
        color: "",
      },
      mapURL: "",
    },

  },

  reducers: {
    getHomeBanner(state,actions){
        state.homeBanner = actions.payload;
    },
    getBrandsBanner(state,actions){
        state.brandsBanner = actions.payload;
    },
    getContactBanner(state,actions){
        state.contactBanner = actions.payload
    },
    getAboutBanner(state,actions){
        state.aboutBanner = actions.payload
    }
  },
});

export const bannerActions = bannerSlice.actions;
export default bannerSlice;
