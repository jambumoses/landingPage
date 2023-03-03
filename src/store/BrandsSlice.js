import {createSlice} from "@reduxjs/toolkit";
import img from "../components/img/Picture4.jpg";

const BrandsSlice = createSlice({
    name: "brands",
    initialState: {
        brands:{
            heading: "Brands",
            brands:[
                {
                    id: 1,
                    count: "01",
                    name:"gorillos",
                    description:"To efficiently distribute quality products that delight customers and deliver sustainable stakeholder value",
                    image: img,
                    link:""
                },
                {
                    id: 2,
                    count: "02",
                    name:"BIC",
                    description:"To efficiently distribute quality products that delight customers and deliver sustainable stakeholder value",
                    image:"./img/brand5.png",
                    link:""
                },
                {
                    id: 3,
                    count: "03",
                    name:"keian",
                    description:"To efficiently distribute quality products that delight customers and deliver sustainable stakeholder value",
                    image:"./img/brand1.png",
                    link:""
                },
                {
                    id: 4,
                    count: "04",
                    name:"trident industries LTD",
                    description:"To efficiently distribute quality products that delight customers and deliver sustainable stakeholder value",
                    image:"./img/brand2.png",
                    link:""
                },
                {
                    id: 5,
                    count: "05",
                    name:"suntory",
                    description:"To efficiently distribute quality products that delight customers and deliver sustainable stakeholder value",
                    image:"./img/brand3.png",
                    link:""
                },
                {
                    id: 6,
                    count: "06",
                    name:"proctor & allan",
                    description:"To efficiently distribute quality products that delight customers and deliver sustainable stakeholder value",
                    image:"./img/brand4.png",
                    link:""
                },
                {
                    id: 7,
                    count: "07",
                    name:"KETEPA",
                    description:"To efficiently distribute quality products that delight customers and deliver sustainable stakeholder value",
                    image:"./img/brand6.jpg",
                    link:""
                },
                {
                    id: 8,
                    count: "08",
                    name:"GSK",
                    description:"To efficiently distribute quality products that delight customers and deliver sustainable stakeholder value",
                    image:"./img/brand8.png",
                    link:""
                },
                {
                    id: 9,
                    count: "09",
                    name:"HAYAT",
                    description:"To efficiently distribute quality products that delight customers and deliver sustainable stakeholder value",
                    image:"./img/brand9.jpg",
                    link:""
                },
                {
                    id: 10,
                    count: "10",
                    name:"cussons",
                    description:"To efficiently distribute quality products that delight customers and deliver sustainable stakeholder value",
                    image:"./img/brand11.png",
                    link:""
                },
                {
                    id: 11,
                    count: "11",
                    name:"HACO",
                    description:"To efficiently distribute quality products that delight customers and deliver sustainable stakeholder value",
                    image:"./img/brand12.png",
                    link:""
                },
                {
                    id: 12,
                    count: "12",
                    name:"Kim fay",
                    description:"To efficiently distribute quality products that delight customers and deliver sustainable stakeholder value",
                    image:"./img/brand10.png",
                    link:""
                },
                {
                    id: 13,
                    count: "13",
                    name:"truFood",
                    description:"To efficiently distribute quality products that delight customers and deliver sustainable stakeholder value",
                    image:"./img/brand17.png",
                    link:""
                },
            ]
        }

    },// end of state
    reducers:{

    }
});

export const BrandsActions = BrandsSlice.actions;
export default BrandsSlice;


