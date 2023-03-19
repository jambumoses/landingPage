import { createSlice } from "@reduxjs/toolkit";

const merchantSlice = createSlice({
  name: "merchant",
  initialState: {
    /* company */
    CompanyTitle: "jambugift.com",
    CompanyDescription:
      "gift the number 1 distributor of fast moving consumer goods",
    footerCompanyTitle: "african queen No1 Distributor LTD",

    misson:
      "To efficiently distribute quality products that delight customers and deliver sustainable stakeholder value",
    vision: "Enriching lives through placing quality products at arms length",

    logo: {
      nav: "./img/AQ-LOGO.png",
      browserTab:
        "data:image/png;base64,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",
      footer: "./img/AQ-LOGO.png",
    },

    aboutus: {
      mission:
        "To efficiently distribute quality products that delight customers and deliver sustainable stakeholder value",
      vision: "Enriching lives through placing quality products at arms length",
      notes: [
        {
          _id: 1,
          note: "African Queen No. 1 Distributor Limited is a privately-owned organization in the business of large-scale importation and distribution of Fast-Moving Consumer goods in the categories of Personal Care (Hair and Skin), Stationery, Homecare and Foods & Beverages.",
        },
        {
          _id: 2,
          note: "From a humble beginning of a small shop in the heart of Kampala downtown area of kikuubo, African Queen has grown into the leading distributor of Fast-Moving Consumer Goods in Uganda. Currently, the company has eight depots around the country i.e. in the Central Business District (2 Depots), Namanve, Gulu, Mbarara, Masaka, Hoima and Mbale.",
        },
        {
          _id: 3,
          note: "We pride ourselves in distributing only the best quality affordable products from world known manufacturers including; PZ Cussons East Africa ,HACO Industries, Kimfay East Africa, Kevian East Africa, Trident Industries, Great Lakes Brands, Suntory Beverages,Trufoods East African, Bic East Africa, Loreal East Africa, GlaxoSmithKline (GSK),Proctor & Allan Industries, Ketepa and Molfix Industries",
        },
        {
          _id: 4,
          note: "We have been recognized by the Uganda Revenue Authority as being one of largest tax payers in the country and in 2019we attained the coveted ‘’Authorized Economic Operator certificate’’ from the tax body.",
        },
      ],
      membership: {
        board: {
          title: "Governance Board",
          members: [
            { 
                id:1,
              image: "./img/member_remove.png",
              name: "mukulish arafat",
              role: "CEO acardia shopping mall, Senior",
            },
            {
                id:2,
              image: "./img/member_remove.png",
              name: "jambu moses",
              role: "software engineer, systems manager",
            },
          ],
        },
        managementTeam: {
          title: "The Management Team",
          members: [
            {
                id:1,
              image: "",
              name: "mukulish arafat",
              role: "CEO acardia shopping mall",
            },
            { image: "", name: "jambu moses", role: "software engineer" },
            {
                id:2,
              image: "",
              name: "mukulish arafat",
              role: "CEO acardia shopping mall",
            },
            {
                id:3,
              image: "",
              name: "mukulish arafat",
              role: "CEO acardia shopping mall",
            },
            { id: 4,image: "", name: "jambu moses", role: "software engineer" },
            {
                id:5,
              image: "",
              name: "mukulish arafat",
              role: "CEO acardia shopping mall",
            },
          ],
        },
      },
    },

    /* contact */
    Contact: {
      heading: "contact us",
      location: {
        address: "namanve plot 1769 jinja",
        fontawesome_icon: "fa fa-location-dot",
        link: "https://maps.google.com",
      },
      phone: {
        type: "work",
        title: "+256708093144",
        fontawesome_icon: "fa fa-phone",
        link: "+256708093144",
      },
      email: {
        type: "Email",
        mail: "info@africangqueen.co.ug",
        fontawesome_icon: "fa fa-envelope",
        link: "info@africangqueen.co.ug",
      },
    },

    contactUsPage: {
      mapLocation:
        "https://maps.google.com/maps?q=african%20queen&t=&z=11&ie=UTF8&iwloc=&output=embed",
      BannerHeading: "Let's Make Something Awesome Together",
      BannerDescription:
        "To efficiently distribute quality products that delight customers and deliver sustainable stakeholder value",
      contactFormTitle: "Get In Touch",
      contactFormDescription:
        "To efficiently distribute quality products that delight",
    },

    /* soacials */
    socials: {
      heading: "follow us",
      social: [
        {
          id: 1,
          title: "facebook",
          fontawesome_icon: "fab fa-facebook",
          link: "https://www.facebook.com",
        },
        {
          id: 2,
          title: "linkedin",
          fontawesome_icon: "fab fa-linkedin",
          link: "https://www.linkedin.com",
        },
        {
          id: 3,
          title: "instagram",
          fontawesome_icon: "fab fa-instagram",
          link: "https://www.instagram.com",
        },
        {
          id: 4,
          title: "twitter",
          fontawesome_icon: "fab fa-twitter",
          link: "https://www.twitter.com",
        },
      ],
    },
  }, // end of state
  reducers: {},
});

export const merchantActions = merchantSlice.actions;
export default merchantSlice;
