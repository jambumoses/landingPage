import { createSlice } from "@reduxjs/toolkit";

//import img from "../components/img/nobg/50233e9f6cc82aeccb43483efff43623-removebg-preview.png";
//import aboutimage from "../components/img/pic3.jpg";

const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    // home banner
    homeBanner: [
      {
        _id: "6407c4bbc9dce78396f5c561",
        backgroundColor: "",
        title: {
          content: "FOODS AND BEVERAGES",
          color: "",
        },
        description: {
          content:
            "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic Materials That Use Polymers As A Main Ingredient. Their Plasticity Makes It Possible For Plastics ... Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
          color: "",
        },
        button: {
          name: "order now",
          link: "brands",
          color: "",
          backgroundColor: "",
        },
        image: {
          url: "../components/img/pic3.jpg",
        },
      },

      {
        _id: "6407c4f2c9dce78396f5c572",
        backgroundColor: "",
        title: {
          content: "become a distributor",
          color: "",
        },
        description: {
          content:
            "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic Materials That Use Polymers As A Main Ingredient. Their Plasticity Makes It Possible For Plastics ... Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
          color: "",
        },
        button: {
          name: "parter with us",
          link: "brands",
          color: "",
          backgroundColor: "",
        },
        image: {
          url: "../components/img/pic3.jpg",
        },
      },

      {
        _id: "640c12c884fba8fb6a5a7e3b",
        title: {
          content: "jupiter",
          color: "lightgreen",
        },
        description: {
          content:
            "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic Materials That Use Polymers As A Main Ingredient. Their Plasticity Makes It Possible For Plastics ... Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
          color: "",
        },
        button: {
          name: "book now",
          link: "brands",
          color: "green",
          backgroundColor: "lightgreen",
        },
        image: {
          url: "../components/img/pic3.jpg",
        },
        backgroundColor: "",
      },
    ],

    // about banner
    aboutBanner: {
      _id: "640c2b3784fba8fb6a5aeba1",
      title: {
        content: "about our cooperative",
        color: "",
      },
      image: {
        url: "./img/pic3.jpg",
      },
    },

    // brands banner
    brandsBanner: {
      _id: "640c205f84fba8fb6a5a828c",
      title: {
        content: "Our Partners",
        color: "",
      },
      description: {
        content:
          "Brands the we work with for the delivery and great product demand and suplies to fuel up the system.",
        color: "",
      },
      image: {
        url: "./img/brands_banner1.png",
      },
      backgroundColor: "",
    },

    // contact banner
    contactBanner: {
      _id: "640c291784fba8fb6a5aea56",
      title: {
        content: "Let's Make Something Awesome Together",
        color: "",
      },
      description: {
        content:
          "To efficiently distribute quality products that delight customers and deliver sustainable stakeholder value",
        color: "",
      },
      mapURL:
        "https://maps.google.com/maps?q=african%20queen&t=&z=11&ie=UTF8&iwloc=&output=embed",
    },
  },

  reducers: {
    getHomeBanner(state, actions) {
      state.homeBanner = actions.payload;
    },
    getBrandsBanner(state, actions) {
      state.brandsBanner = actions.payload;
    },
    getContactBanner(state, actions) {
      state.contactBanner = actions.payload;
    },
    getAboutBanner(state, actions) {
      state.aboutBanner = actions.payload;
    },
  },
});

export const bannerActions = bannerSlice.actions;
export default bannerSlice;
