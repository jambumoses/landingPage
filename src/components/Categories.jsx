import {React,useState,useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { useDispatch } from 'react-redux';
import { constantActions } from '../store/constantSlice';

import image1 from "./img/nobg/77f336891733e356d4d9c8a93ed9c942-removebg-preview.png";
import image2 from "./img/nobg/PAP2-removebg-preview.png";
import image3 from "./img/nobg/Maruti-Tissue-removebg-preview.png";
import image4 from "./img/nobg/50233e9f6cc82aeccb43483efff43623-removebg-preview.png";
import image5 from "./img/nobg/denny-muller-s9zGsWDiFO4-unsplash-removebg-preview.png";
import image6 from "./img/nobg/images__1_-removebg-preview.png";
import image7 from "./img/nobg/malik-skydsgaard-7I8pZ8mtotg-unsplash-removebg-preview.png";
import image8 from "./img/nobg/images-removebg-preview.png";


export default function Categories() {

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  const dispatch = useDispatch();

  dispatch(constantActions.updatePageTitles("Categories"));
  dispatch(constantActions.setCurrentPage("categories"));

  const [Categories,setCategories] = useState([
    {
      id: 1,
      name: "servittes",
      slug: "todayAd",
      assets: [
        {
          id: 1,
          url: image1
        }
      ],
      description: "Plastics are a wide range of synthetic or semi-synthetic materials that use polymers as a main ingredient. Their plasticity makes it possible for plastics ..."
    },
    {
      id: 2,
      name: "toilet papers",
      slug: "toilet papers",
      assets: [
        {
          id: 1,
          url: image2
        }
      ],
      description: "Plastics are a wide range of synthetic or semi-synthetic materials that use polymers as a main ingredient. Their plasticity makes it possible for plastics ..."
    },
    {
      id: 3,
      name: "chitcken towel",
      slug: "chitcken towels",
      assets: [
        {
          id: 1,
          url: image5
        }
      ],
      description: "Plastics are a wide range of synthetic or semi-synthetic materials that use polymers as a main ingredient. Their plasticity makes it possible for plastics ..."
    },
    {
      id: 4,
      name: "gabbage bags",
      slug: "gabbage bags",
      assets: [
        {
          id: 1,
          url: image6
        }
      ],
      description: "Plastics are a wide range of synthetic or semi-synthetic materials that use polymers as a main ingredient. Their plasticity makes it possible for plastics ..."
    },
    {
      id: 1,
      name: "servittes",
      slug: "servittes",
      assets: [
        {
          id: 1,
          url: image3
        }
      ],
      description: "Plastics are a wide range of synthetic or semi-synthetic materials that use polymers as a main ingredient. Their plasticity makes it possible for plastics ..."
    },
    {
      id: 2,
      name: "facial tissues",
      slug: "facial tissues",
      assets: [
        {
          id: 1,
          url: image4
        }
      ],
      description: "Plastics are a wide range of synthetic or semi-synthetic materials that use polymers as a main ingredient. Their plasticity makes it possible for plastics ..."
    },
    {
      id: 3,
      name: "chitcken towel",
      slug: "chitcken towels",
      assets: [
        {
          id: 1,
          url: image7
        }
      ],
      description: "Plastics are a wide range of synthetic or semi-synthetic materials that use polymers as a main ingredient. Their plasticity makes it possible for plastics ..."
    },
    {
      id: 4,
      name: "gabbage bags",
      slug: "gabbage bags",
      assets: [
        {
          id: 1,
          url: image8
        }
      ],
      description: "Plastics are a wide range of synthetic or semi-synthetic materials that use polymers as a main ingredient. Their plasticity makes it possible for plastics ..."
    },
  ]);






  const [Top_sells,setTop_sells] = useState(
    [
      {
        id: 35,
        name: "servittes sever",
        image: {
          url: image1 /* data:image/jpeg;base64,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 */
        },
        price: {
          raw: 20,
          formatted_with_symbol : "$ 20"
        },
      },
      {
        id: 11,
        name: "toilet paper",
        image: {
          url: image2/* "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSfZN56LQBpMMY6lPQs3t5Xhrn-sai5BQyg&usqp=CAU" */
        },
        price: {
          raw: 40,
          formatted_with_symbol : "$ 40"
        }
      },
      {
        id: 32,
        name: "thermal tissues",
        image: {
          url: image3/* "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSfZN56LQBpMMY6lPQs3t5Xhrn-sai5BQyg&usqp=CAU" */
        },
        price: {
          raw: 60,
          formatted_with_symbol : "$ 60"
        }
      },
      {
        id: 43,
        name: "facial tissues",
        image: {
          url: image4/* "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSfZN56LQBpMMY6lPQs3t5Xhrn-sai5BQyg&usqp=CAU" */
        },
        price: {
          raw: 80,
          formatted_with_symbol : "$ 80"
        }
      },
      {
        id: 54,
        name: "kitchen towels",
        image: {
          url: image5/* "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtCCXC9qesk37jOWhzs7v0JUBebpPeckfHeg&usqp=CAU" */
        },
        price: {
          raw: 10,
          formatted_with_symbol : "$ 10"
        }
      },
      {
        id: 63,
        name: "cleaner bags",
        image: {
          url: image6/* "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSfZN56LQBpMMY6lPQs3t5Xhrn-sai5BQyg&usqp=CAU" */
        },
        price: {
          raw: 400,
          formatted_with_symbol : "$ 400"
        }
      },
      {
        id: 73,
        name: "sanitizer",
        image: {
          url: image7/* "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSfZN56LQBpMMY6lPQs3t5Xhrn-sai5BQyg&usqp=CAU" */
        },
        price: {
          raw: 500,
          formatted_with_symbol : "$ 500"
        }
      },
      {
        id: 83,
        name: "gabbage bags",
        image: {
          url: image8/* "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSfZN56LQBpMMY6lPQs3t5Xhrn-sai5BQyg&usqp=CAU" */
        },
        price: {
          raw: 100,
          formatted_with_symbol : "$ 100"
        }
      },
    ]
  ) 



  function ProductRange({data}){
    return(
      <div className='aside_contain'>
        <span className='aside_heading'>product range</span>
        <ul className='aside_ul'>
          {
            data.map(function(item){
              return(
                <li key={item.id}><a href=''>{item.name}</a></li>
              )
            })
          }
        </ul>
      </div>
    )
  }


  function ScrollCategory({data}){

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

    return(
      <div data-aos="fade-down" className='category_container' style={{marginTop:"0px"}}>
        <div className='category_container_title'>
          <span>Drag to see categories</span>
          <span><a href="#">{/* see all */}</a></span>
        </div>
        <div className='category_listing'>
            <Slider {...settings}>
              {
                data.map(function(item){
                  return(
                    <div className='category_listing_item'>
                      <span className='category_listing_item_img'>
                        <img src={item.assets[0].url} alt="" />
                      </span>
                      <span className='category_listing_item_info_ctg'>
                        <span className='category_listing_item_info_name_ctg'><a href="">{item.name}</a></span>
                      </span>
                    </div>
                  )
                })
              }

            </Slider>
        </div>
      </div>
    )
  }



  function CategoryComponentsTopMain({data}){
    return(
      <div className='category_in_specific_item_top'>
        <div className='category_in_specific_item_top_info'>
          <div  className='category_in_specific_item_top_info_head'>our collection</div>
          <div className='category_in_specific_item_top_info_content'>
            <span data-aos="fade-up" className='category_in_specific_item_top_info_content_title'>{data.name}</span>
            <span data-aos="fade-up" className='category_in_specific_item_top_info_content_description'>
              {data.description}
            </span>
          </div>
        </div>
        <div className='category_in_specific_item_top_img'>
          <span data-aos="fade-up" className='category_in_specific_item_top_img_btns'>
            <a href="">Check</a>
            <a href=""><i className="fa fa-cart-plus"></i></a>
          </span>
          <span data-aos="fade-up" className='category_in_specific_item_top_img_thumbnail'>
            <img src={data.assets[0].url} alt="" />
          </span>
        </div>
      </div>
    )
  }

  function CategoryComponents({data}){
    return(
      <div className='category_in_specific_item'>
        <div data-aos="fade-up" className='category_in_specific_item_img'>
          <img src={data.assets[0].url} alt="" />
        </div>
        <div className='category_in_specific_item_info'>
          <div data-aos="fade-up" className='category_in_specific_item_info_title'>{data.name}</div>
          <div data-aos="fade-up" className='category_in_specific_item_info_content'>
          {data.description}
          </div>
          <div data-aos="fade-up" className='category_in_specific_item_info_prices'>
            <a href="">Details</a>
            <a href=""><i className="fa fa-cart-plus"></i></a>
          </div>
        </div>
      </div>
    )
  }



  function CategoryComponentReversed({data}){
    return(
      <div className='category_in_specific_item category_in_specific_item_reverse'>
        <div data-aos="fade-up" className='category_in_specific_item_img'>
          <img src={data.assets[0].url} alt="" />
        </div>
        <div className='category_in_specific_item_info'>
          <div data-aos="fade-up" className='category_in_specific_item_info_title'>{data.name}</div>
          <div data-aos="fade-up" className='category_in_specific_item_info_content'>
          {data.description}
          </div>
          <div data-aos="fade-up" className='category_in_specific_item_info_prices'>
            <a href="">Details</a>
            <a href=""><i className="fa fa-cart-plus"></i></a>
          </div>
        </div>
      </div>
    )
  }



  function CategoryBody({data}){
    return(
      <section className='category_in_specific'>
        
        {
          data.map(function(item){
            return (item.slug === "todayAd") && <CategoryComponentsTopMain data={item}/>
          })
        }

        {/* sort by even */}
        {
          data.map(function(item){
            return (item.slug != "todayAd") && (item.name.length%2 != 0) && <CategoryComponents key={item.id} data={item}/>
          })
        }

        {/* sort by odd */}
        {
          data.map(function(item){
            return (item.slug != "todayAd") && (item.name.length%2 != 1) && <CategoryComponentReversed key={item.id} data={item}/>
          })
        }


      </section>
    )
  }

  function TopSells({data}){
    return (
      <>
          <div data-aos="fade-up" className='category_container'>
            <div className='category_container_title'>
              <span>Top sellers</span>
              <span><a href="#">see all</a></span>
            </div>
            <div className='category_listing'>
                <Slider {...settings}>
                  {
                    data.map(function(item){
                      return(
                        <div key={item.id} className='category_listing_item'>
                          <span className='category_listing_item_img'>
                            <img src={item.image.url} alt="" />
                          </span>
                          <span className='category_listing_item_info'>
                            <span className='category_listing_item_info_name'><a href="">{item.name}</a></span>
                            <span className='category_listing_item_info_price'>{item.price.formatted_with_symbol}</span>
                          </span>
                        </div>
                      )
                    })
                  }
                </Slider>
            </div>
          </div>
      </>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };


  return (
    <>
    <section className='categories_wrapper'>
      <div className='categories_section'>
        <section className='categories_main_section'>

          {(Categories.length > 0) && <ScrollCategory data={Categories}/>}

          {(Categories.length > 0) && <CategoryBody data={Categories}/>}

          {(Top_sells.length > 0) && <TopSells data={Top_sells}/>}

        </section>
        
        <section className='categories_aside_section'>
          {(Categories.length > 0) && <ProductRange data={Categories}/>}
        </section>
      </div>
    </section>
    </>
  )
}
