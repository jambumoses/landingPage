import {React,useState,useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {useSelector, useDispatch } from 'react-redux';
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
  const companyName = useSelector(state=>state.merchant.CompanyTitle)

  dispatch(constantActions.updatePageTitles(companyName+" . "+"Categories"));
  dispatch(constantActions.setCurrentPage("categories"));

  // fetch data from categories
  const Categories = useSelector(state=>state.categories.categories)

  // fetch data from top sell - product
  const Top_sells = useSelector(state=>state.products.TopSells)



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
                    <div key={item.id} className='category_listing_item'>
                      <span className='category_listing_item_img'>
                        <img src={item.images.url} alt="" />
                      </span>
                      <span className='category_listing_item_info_ctg'>
                        <span className='category_listing_item_info_name_ctg'><a href="">{item.category.slice(0,15)}</a></span>
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
            <span data-aos="fade-up" className='category_in_specific_item_top_info_content_title'>{data.category}</span>
            <span data-aos="fade-up" className='category_in_specific_item_top_info_content_description'>
              {data.description.slice(0,150)} ...
            </span>
          </div>
        </div>
        <div className='category_in_specific_item_top_img'>
          <span data-aos="fade-up" className='category_in_specific_item_top_img_btns'>
            <a href="">Check</a>
            <a href=""><i className="fa fa-cart-plus"></i></a>
          </span>
          <span data-aos="fade-up" className='category_in_specific_item_top_img_thumbnail'>
            <img src={data.images.url} alt="" />
          </span>
        </div>
      </div>
    )
  }

  function CategoryComponents({data}){
    return(
      <div className='category_in_specific_item'>
        <div data-aos="fade-up" className='category_in_specific_item_img'>
          <img src={data.images.url} alt="" />
        </div>
        <div className='category_in_specific_item_info'>
          <div data-aos="fade-up" className='category_in_specific_item_info_title'>{data.category}</div>
          <div data-aos="fade-up" className='category_in_specific_item_info_content'>
          {data.description.slice(0,150)} ...
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
          <img src={data.images.url} alt="" />
        </div>
        <div className='category_in_specific_item_info'>
          <div data-aos="fade-up" className='category_in_specific_item_info_title'>{data.category}</div>
          <div data-aos="fade-up" className='category_in_specific_item_info_content'>
          {data.description.slice(0,150)} ...
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
            return (item.type === "todayAd") && <CategoryComponentsTopMain key={item.id} data={item}/>
          })
        }

        {/* sort by even */}
        {
          data.map(function(item){
            return (item.type != "todayAd") && (item.category.length%2 != 0) && <CategoryComponents key={item.id} data={item}/>
          })
        }

        {/* sort by odd */}
        {
          data.map(function(item){
            return (item.type != "todayAd") && (item.category.length%2 != 1) && <CategoryComponentReversed key={item.id} data={item}/>
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
                    data.slice(0,10).map(function(item){
                      return(
                        <div key={item.id} className='category_listing_item'>
                          <span className='category_listing_item_img'>
                            <img src={item.images.url} alt="" />
                          </span>
                          <span className='category_listing_item_info'>
                            <span className='category_listing_item_info_name'><a href="">{item.name.slice(0,25)}</a></span>
                            <span className='category_listing_item_info_price'>{item.initialPrice.formatted_with_symbol}</span>
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

          {(Top_sells.length > 0) &&  <TopSells data={Top_sells}/>}

        </section>
        
        <section className='categories_aside_section'>
          {(Categories.length > 0) && <ProductRange data={Categories}/>}
        </section>
      </div>
    </section>
    </>
  )
}
