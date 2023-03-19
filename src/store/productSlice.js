import { createSlice } from "@reduxjs/toolkit";
import image from "../components/img/nobg/77f336891733e356d4d9c8a93ed9c942-removebg-preview.png";

const productSlice = createSlice({
  name: "products",
  initialState: {
    TopSells: [
      {
        _id: 1,
        name: "servittes sever",
        category: "servittes",
        slug: "servittes",
        description:
          "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity ...",
        quantity: 1,
        orders: 10,
        images: {
          url: image,
          detailed_images: [
            { id: 1, alt: "", url: "" },
            { id: 2, alt: "", url: "" },
          ],
        },
        initialPrice: {
          raw: 200,
          formatted_with_symbol: "$ 200",
        },
        subtotal: {
          raw: 500,
          formatted_with_symbol: "$ 500",
        },
      },
      {
        _id: 2,
        name: "toilet paper",
        category: "paper",
        slug: "toilet paper",
        description:
          "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity ...",
        quantity: 1,
        orders: 10,
        images: {
          url: image,
          detailed_images: [
            { id: 1, alt: "", url: "" },
            { id: 2, alt: "", url: "" },
          ],
        },
        initialPrice: {
          raw: 200,
          formatted_with_symbol: "$ 200",
        },
        subtotal: {
          raw: 500,
          formatted_with_symbol: "$ 500",
        },
      },
      {
        _id: 3,
        name: "servittes sever",
        category: "servittes",
        slug: "servittes",
        description:
          "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity ...",
        quantity: 1,
        orders: 10,
        images: {
          url: image,
          detailed_images: [
            { id: 1, alt: "", url: "" },
            { id: 2, alt: "", url: "" },
          ],
        },
        initialPrice: {
          raw: 200,
          formatted_with_symbol: "$ 200",
        },
        subtotal: {
          raw: 500,
          formatted_with_symbol: "$ 500",
        },
      },
      {
        _id: 4,
        name: "toilet paper",
        category: "paper",
        slug: "toilet paper",
        description:
          "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity ...",
        quantity: 1,
        orders: 10,
        images: {
          url: image,
          detailed_images: [
            { id: 1, alt: "", url: "" },
            { id: 2, alt: "", url: "" },
          ],
        },
        initialPrice: {
          raw: 200,
          formatted_with_symbol: "$ 200",
        },
        subtotal: {
          raw: 500,
          formatted_with_symbol: "$ 500",
        },
      },
      {
        _id: 5,
        name: "servittes sever",
        category: "servittes",
        slug: "servittes",
        description:
          "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity ...",
        quantity: 1,
        orders: 10,
        images: {
          url: image,
          detailed_images: [
            { id: 1, alt: "", url: "" },
            { id: 2, alt: "", url: "" },
          ],
        },
        initialPrice: {
          raw: 200,
          formatted_with_symbol: "$ 200",
        },
        subtotal: {
          raw: 500,
          formatted_with_symbol: "$ 500",
        },
      },
      {
        _id: 6,
        name: "toilet paper",
        category: "paper",
        slug: "toilet paper",
        description:
          "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity ...",
        quantity: 1,
        orders: 10,
        images: {
          url: image,
          detailed_images: [
            { id: 1, alt: "", url: "" },
            { id: 2, alt: "", url: "" },
          ],
        },
        initialPrice: {
          raw: 200,
          formatted_with_symbol: "$ 200",
        },
        subtotal: {
          raw: 500,
          formatted_with_symbol: "$ 500",
        },
      },
    ],
    products: [],
  }, // end of products object
  reducers: {
    getTrends(state, actions) {
      state.TopSells = actions.payload;
    },
    getProducts(state, actions) {
      state.products = actions.payload;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
