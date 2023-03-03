import {createSlice} from "@reduxjs/toolkit";
import image from "../components/img/nobg/PAP2-removebg-preview.png";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories:[
              {
                id: 1,
                category: "servittes",
                slug: "servittes",
                type: "todayAd",
                description: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity...",
                images: {
                  url: image,
                  assets:[
                    {id: 1, alt: "", url: ""},
                    {id: 2, alt: "", url: ""}
                  ]
                },
                product:[
                    {
                        id: 1,
                        name: "servittes sever",
                        category: "servittes",
                        slug: "servittes",
                        description: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
                        quantity: 1,
                        images: {
                          url: image,
                          detailed_images:[
                            {id: 1, alt: "", url: ""},
                            {id: 2, alt: "", url: ""}
                          ]
                        },
                        initialPrice: {
                          raw: 200,
                          formatted_with_symbol : "$ 200"
                        },
                        subtotal: {
                          raw: 500,
                          formatted_with_symbol : "$ 500"
                        }
                      },
                ]
              },

              {
                id: 2,
                category: "towel",
                slug: "towel",
                type: "d",
                description: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
                images: {
                  url: image,
                  assets:[
                    {id: 1, alt: "", url: ""},
                    {id: 2, alt: "", url: ""}
                  ]
                },
                product:[
                    {
                        id: 1,
                        name: "servittes sever",
                        category: "servittes",
                        slug: "servittes",
                        description: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
                        quantity: 1,
                        images: {
                          url: image,
                          detailed_images:[
                            {id: 1, alt: "", url: ""},
                            {id: 2, alt: "", url: ""}
                          ]
                        },
                        initialPrice: {
                          raw: 200,
                          formatted_with_symbol : "$ 200"
                        },
                        subtotal: {
                          raw: 500,
                          formatted_with_symbol : "$ 500"
                        }
                      },
                ]
              },


              {
                id: 3,
                category: "toilet paper",
                slug: "toilet paper",
                type: "",
                description: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
                images: {
                  url: image,
                  assets:[
                    {id: 1, alt: "", url: ""},
                    {id: 2, alt: "", url: ""}
                  ]
                },
                product:[
                    {
                        id: 1,
                        name: "servittes sever",
                        category: "servittes",
                        slug: "servittes",
                        description: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
                        quantity: 1,
                        images: {
                          url: image,
                          detailed_images:[
                            {id: 1, alt: "", url: ""},
                            {id: 2, alt: "", url: ""}
                          ]
                        },
                        initialPrice: {
                          raw: 200,
                          formatted_with_symbol : "$ 200"
                        },
                        subtotal: {
                          raw: 500,
                          formatted_with_symbol : "$ 500"
                        }
                      },
                ]
              },


              {
                id: 4,
                category: "servittes",
                slug: "servittes",
                type: "",
                description: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
                images: {
                  url: image,
                  assets:[
                    {id: 1, alt: "", url: ""},
                    {id: 2, alt: "", url: ""}
                  ]
                },
                product:[
                    {
                        id: 1,
                        name: "servittes sever",
                        category: "servittes",
                        slug: "servittes",
                        description: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
                        quantity: 1,
                        images: {
                          url: image,
                          detailed_images:[
                            {id: 1, alt: "", url: ""},
                            {id: 2, alt: "", url: ""}
                          ]
                        },
                        initialPrice: {
                          raw: 200,
                          formatted_with_symbol : "$ 200"
                        },
                        subtotal: {
                          raw: 500,
                          formatted_with_symbol : "$ 500"
                        }
                      },
                ]
              },

              {
                id: 5,
                category: "servittes",
                slug: "servittes",
                type: "",
                description: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
                images: {
                  url: image,
                  assets:[
                    {id: 1, alt: "", url: ""},
                    {id: 2, alt: "", url: ""}
                  ]
                },
                product:[
                    {
                        id: 1,
                        name: "servittes sever",
                        category: "servittes",
                        slug: "servittes",
                        description: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
                        quantity: 1,
                        images: {
                          url: image,
                          detailed_images:[
                            {id: 1, alt: "", url: ""},
                            {id: 2, alt: "", url: ""}
                          ]
                        },
                        initialPrice: {
                          raw: 200,
                          formatted_with_symbol : "$ 200"
                        },
                        subtotal: {
                          raw: 500,
                          formatted_with_symbol : "$ 500"
                        }
                      },
                ]
              },

              {
                id: 6,
                category: "servittes",
                slug: "servittes",
                type: "",
                description: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
                images: {
                  url: image,
                  assets:[
                    {id: 1, alt: "", url: ""},
                    {id: 2, alt: "", url: ""}
                  ]
                },
                product:[
                    {
                        id: 1,
                        name: "servittes sever",
                        category: "servittes",
                        slug: "servittes",
                        description: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
                        quantity: 1,
                        images: {
                          url: image,
                          detailed_images:[
                            {id: 1, alt: "", url: ""},
                            {id: 2, alt: "", url: ""}
                          ]
                        },
                        initialPrice: {
                          raw: 200,
                          formatted_with_symbol : "$ 200"
                        },
                        subtotal: {
                          raw: 500,
                          formatted_with_symbol : "$ 500"
                        }
                      },
                ]
              },

              {
                id: 7,
                category: "servittes",
                slug: "servittes",
                type: "",
                description: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
                images: {
                  url: image,
                  assets:[
                    {id: 1, alt: "", url: ""},
                    {id: 2, alt: "", url: ""}
                  ]
                },
                product:[
                    {
                        id: 1,
                        name: "servittes sever",
                        category: "servittes",
                        slug: "servittes",
                        description: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
                        quantity: 1,
                        images: {
                          url: image,
                          detailed_images:[
                            {id: 1, alt: "", url: ""},
                            {id: 2, alt: "", url: ""}
                          ]
                        },
                        initialPrice: {
                          raw: 200,
                          formatted_with_symbol : "$ 200"
                        },
                        subtotal: {
                          raw: 500,
                          formatted_with_symbol : "$ 500"
                        }
                      },
                ]
              },

              {
                id: 8,
                category: "servittes",
                slug: "servittes",
                type: "",
                description: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
                images: {
                  url: image,
                  assets:[
                    {id: 1, alt: "", url: ""},
                    {id: 2, alt: "", url: ""}
                  ]
                },
                product:[
                    {
                        id: 1,
                        name: "servittes sever",
                        category: "servittes",
                        slug: "servittes",
                        description: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
                        quantity: 1,
                        images: {
                          url: image,
                          detailed_images:[
                            {id: 1, alt: "", url: ""},
                            {id: 2, alt: "", url: ""}
                          ]
                        },
                        initialPrice: {
                          raw: 200,
                          formatted_with_symbol : "$ 200"
                        },
                        subtotal: {
                          raw: 500,
                          formatted_with_symbol : "$ 500"
                        }
                      },
                ]
              },

              {
                id: 9,
                category: "servittes",
                slug: "servittes",
                type: "",
                description: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
                images: {
                  url: image,
                  assets:[
                    {id: 1, alt: "", url: ""},
                    {id: 2, alt: "", url: ""}
                  ]
                },
                product:[
                    {
                        id: 1,
                        name: "servittes sever",
                        category: "servittes",
                        slug: "servittes",
                        description: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
                        quantity: 1,
                        images: {
                          url: image,
                          detailed_images:[
                            {id: 1, alt: "", url: ""},
                            {id: 2, alt: "", url: ""}
                          ]
                        },
                        initialPrice: {
                          raw: 200,
                          formatted_with_symbol : "$ 200"
                        },
                        subtotal: {
                          raw: 500,
                          formatted_with_symbol : "$ 500"
                        }
                      },
                ]
              },

              {
                id: 10,
                category: "jambu",
                slug: "servittes",
                type: "",
                description: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
                images: {
                  url: image,
                  assets:[
                    {id: 1, alt: "", url: ""},
                    {id: 2, alt: "", url: ""}
                  ]
                },
                product:[
                    {
                        id: 1,
                        name: "servittes sever",
                        category: "servittes",
                        slug: "servittes",
                        description: "Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity",
                        quantity: 1,
                        images: {
                          url: image,
                          detailed_images:[
                            {id: 1, alt: "", url: ""},
                            {id: 2, alt: "", url: ""}
                          ]
                        },
                        initialPrice: {
                          raw: 200,
                          formatted_with_symbol : "$ 200"
                        },
                        subtotal: {
                          raw: 500,
                          formatted_with_symbol : "$ 500"
                        }
                      },
                ]
              },







            ]
    }, // end of state
    reducers:{

    }
});

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice;