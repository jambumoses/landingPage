import {createSlice} from "@reduxjs/toolkit";

import img from "../components/img/nobg/50233e9f6cc82aeccb43483efff43623-removebg-preview.png";
import aboutimage from "../components/img/pic3.jpg";


const bannerSlice = createSlice({
    name: "banner",
    initialState: {

        // home banner
        homeBanner:[
            {
                id: 1,
                backgroundColor: "",
                title : {
                    content: "FOODS AND BEVERAGES",
                    color: ""
                },
                description: {
                    content: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic Materials That Use Polymers As A Main Ingredient. Their Plasticity Makes It Possible For Plastics ... Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
                    color: ""
                },
                button: {
                    name:"order now",
                    link: "brands",
                    color: "",
                    backgroundColor: ""
                },
                image:{
                    url: img
                }
            },
            {
                id: 2,
                backgroundColor: "",
                title : {
                    content: "become a distributor",
                    color: ""
                },
                description: {
                    content: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic Materials That Use Polymers As A Main Ingredient. Their Plasticity Makes It Possible For Plastics ... Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
                    color: ""
                },
                button: {
                    name:"parter with us",
                    link: "brands",
                    color: "",
                    backgroundColor: ""
                },
                image:{
                    url: img
                }
            }
        ],


        // about banner
        aboutBanner:{
            title: {
                content: "",
                color: ""
            },
            image:{
                url: aboutimage
            }
        },


        // brands banner
        brandsBanner:{
            title: {
                content: "Our Partners",
                color: ""
            },
            description: {
                content: "brands the we work with for the delivery and great product demand and suplies to fuel up the system.",
                color: ""
            },
            image: {
                url: ""
            },
            backgroundColor: ""
        },


        // contact banner
        contactBanner:{
            title: {
                content: "Let's Make Something Awesome Together",
                color: ""
            },
            description: {
                content: "To efficiently distribute quality products that delight customers and deliver sustainable stakeholder value",
                color: ""
            },
            mapURL: "https://maps.google.com/maps?q=african%20queen&t=&z=11&ie=UTF8&iwloc=&output=embed"
        }
    },
    reducers:{
        
    }
});

export const bannerActions = bannerSlice.actions;
export default bannerSlice;


