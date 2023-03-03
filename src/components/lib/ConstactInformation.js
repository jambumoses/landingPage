const CONSTANTS = {
    /* company */
    CompanyTitle: "jambu.com",
    CompanyDescription: "the number 1 distributor of fast moving consumer goods",
    
    footerCompanyTitle: "african queen No1 Distributor LTD",
    
    logo:{
        nav:"./img/AQ-LOGO.png",
        browserTab: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSfZN56LQBpMMY6lPQs3t5Xhrn-sai5BQyg&usqp=CAU",
        footer :"./img/AQ-LOGO.png",
    },

    aboutus:{
        mission: "To efficiently distribute quality products that delight customers and deliver sustainable stakeholder value",
        vision: "Enriching lives through placing quality products at arms length",
        notes: [
            "African Queen No. 1 Distributor Limited is a privately-owned organization in the business of large-scale importation and distribution of Fast-Moving Consumer goods in the categories of Personal Care (Hair and Skin), Stationery, Homecare and Foods & Beverages.",
            "From a humble beginning of a small shop in the heart of Kampala downtown area of kikuubo, African Queen has grown into the leading distributor of Fast-Moving Consumer Goods in Uganda. Currently, the company has eight depots around the country i.e. in the Central Business District (2 Depots), Namanve, Gulu, Mbarara, Masaka, Hoima and Mbale.",
            "We pride ourselves in distributing only the best quality affordable products from world known manufacturers including; PZ Cussons East Africa ,HACO Industries, Kimfay East Africa, Kevian East Africa, Trident Industries, Great Lakes Brands, Suntory Beverages,Trufoods East African, Bic East Africa, Loreal East Africa, GlaxoSmithKline (GSK),Proctor & Allan Industries, Ketepa and Molfix Industries",
            "We have been recognized by the Uganda Revenue Authority as being one of largest tax payers in the country and in 2019we attained the coveted ‘’Authorized Economic Operator certificate’’ from the tax body.",
        ],
        membership:{
            board: {
                title: "Governance Board",
                members:[
                    {image:"./img/member_remove.png",name:"mukulish arafat",role:"CEO acardia shopping mall, Senior"},
                    {image:"./img/member_remove.png",name:"jambu moses",role:"software engineer, systems manager"},
                ]
            },
            managementTeam: {
                title: "The Management Team",
                members:[
                    {image:"",name:"mukulish arafat",role:"CEO acardia shopping mall"},
                    {image:"",name:"jambu moses",role:"software engineer"},
                    {image:"",name:"mukulish arafat",role:"CEO acardia shopping mall"},
                    {image:"",name:"mukulish arafat",role:"CEO acardia shopping mall"},
                    {image:"",name:"jambu moses",role:"software engineer"},
                    {image:"",name:"mukulish arafat",role:"CEO acardia shopping mall"},
                ]
            },
        }
    },

    /* contact us page */
    contactUsPage:{
        mapLocation:"https://maps.google.com/maps?q=african%20queen&t=&z=11&ie=UTF8&iwloc=&output=embed",
        BannerHeading:"Let's Make Something Awesome Together",
        BannerDescription:"To efficiently distribute quality products that delight customers and deliver sustainable stakeholder value",
        contactFormTitle:"Get In Touch",
        contactFormDescription:"To efficiently distribute quality products that delight"
    },

    /* newsletters */
    newsLetters:{
        title:"keep updated",
        description:"Sign up for our newletter to recevie updates on exclusive offers",
        placeHolder:"Enter Your Email",
        buttonValue:"subscribe"
    },
    /* navigation */
    navigation:[
        {
            id: 1,
            name:"home",
            link:"/"
        },
        {
            id: 2,
            name:"categories",
            link:"/categories"
        },
        {
            id: 3,
            name:"order now",
            link:"/orders"
        },
        {
            id: 4,
            name:"about us",
            link:"/about"
        },
        {
            id: 5,
            name:"brands",
            link:"/brands"
        },
        {
            id: 6,
            name:"contact us",
            link:"/contact"
        },
        {
            id: 7,
            name:"accounts",
            link:"/accounts"
        }
    ],





    /* contact */
    Contact : {
        heading: "contact us",
        location:{
            address: "namanve plot 1769 jinja",
            fontawesome_icon: "fa fa-location-dot",
            link: "https://maps.google.com"
        },
        phone:{
            title: "+256708093144",
            fontawesome_icon: "fa fa-phone",
            link: "+256708093144"
        },
        email:{
            mail: "info@africangqueen.co.ug",
            fontawesome_icon: "fa fa-envelope",
            link: "info@africangqueen.co.ug"
        }
    },

    /* soacials */
    socials : {
        heading: "follow us",
        social:[
        {
            id: 1,
            title: "facebook",
            fontawesome_icon: "fab fa-facebook",
            link: "https://www.facebook.com"
        },
        {
            id: 2,
            title: "linkedin",
            fontawesome_icon: "fab fa-linkedin",
            link: "https://www.linkedin.com"
        },
        {
            id: 3,
            title: "instagram",
            fontawesome_icon: "fab fa-instagram",
            link: "https://www.instagram.com"
        },
        {
            id: 4,
            title: "twitter",
            fontawesome_icon: "fab fa-twitter",
            link: "https://www.twitter.com"
        }
    ]
    }
}


export default CONSTANTS