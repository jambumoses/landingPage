import React, { useEffect, useState } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import { useSelector,useDispatch } from 'react-redux';

import { constantActions } from '../store/constantSlice';

import $ from 'jquery';

import img1 from "./img/nobg/50233e9f6cc82aeccb43483efff43623-removebg-preview.png";
import img2 from "./img/nobg/denny-muller-s9zGsWDiFO4-unsplash-removebg-preview.png";
import img3 from "./img/nobg/images__1_-removebg-preview.png";
import img4 from "./img/nobg/malik-skydsgaard-7I8pZ8mtotg-unsplash-removebg-preview.png";
import img5 from "./img/nobg/images-removebg-preview.png";
import img6 from "./img/nobg/brands_banner1.png";

export default function Home() {

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  const dispatch = useDispatch();

  dispatch(constantActions.updatePageTitles("Home")); // company name here
  dispatch(constantActions.setCurrentPage("home"));
  
  const [data_,set_data]=useState([])

/*   const fu = async ()=>{
    const {data} = await commerce.products.list();
    set_data(data)
  } */
  /* 
  setInterval(() => {
    fu()
  }, 500); */

  //console.log(data_)

/*   function RunBannerAnime(){
    $('.home_banner_container').slideToggle("fast");
  } */


  return (
    <>
    <section className='wrapper'>
        <Carousel prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" style={{fontSize: "10px"}} />} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />} interval={5000} indicators={false} pause={false} style={{backgroundColor:"transparent",height: "100vh",width:"100%"}}>
          <Carousel.Item>
              <section className='carousel_container'>
                {/* <img src={img}/> */}
                <div className='note'>
                  <section className='home_banner_container'>
                    <h3 data-aos="fade-up">stationary</h3>
                      <p data-aos="fade-up">
                        Plastics are a wide range of synthetic or semi-synthetic materials that use polymers as a main ingredient. Their plasticity makes it possible for plastics ...
                      </p>
                      <button data-aos="fade-up">partner with us</button>
                    </section>
                </div>
                <div data-aos="fade-up" className='thumbnail_'>
                  <img src={img1}/>
                </div>
              </section>
          </Carousel.Item>

          <Carousel.Item>
              <section className='carousel_container'>
                {/* <img src={img}/> */}
                <div className='note'>
                  <section className='home_banner_container'>
                    <h3 data-aos="fade-up">foods and beverages</h3>
                      <p data-aos="fade-up">
                        Plastics are a wide range of synthetic or semi-synthetic materials that use polymers as a main ingredient. Their plasticity makes it possible for plastics ...
                      </p>
                      <button data-aos="fade-up">partner with us</button>
                    </section>
                </div>
                <div data-aos="fade-up" className='thumbnail_'>
                  <img src={img2}/>
                </div>
              </section>
          </Carousel.Item>

          
          <Carousel.Item>
              <section className='carousel_container'>
                {/* <img src={img}/> */}
                <div className='note'>
                  <section className='home_banner_container'>
                    <h3 data-aos="fade-up">foods and beverages</h3>
                      <p data-aos="fade-up">
                        Plastics are a wide range of synthetic or semi-synthetic materials that use polymers as a main ingredient. Their plasticity makes it possible for plastics ...
                      </p>
                      <button data-aos="fade-up">partner with us</button>
                    </section>
                </div>
                <div data-aos="fade-up" className='thumbnail_'>
                  <img src={img3}/>
                </div>
              </section>
          </Carousel.Item>


          
          <Carousel.Item>
              <section className='carousel_container'>
                {/* <img src={img}/> */}
                <div className='note'>
                  <section className='home_banner_container'>
                    <h3 data-aos="fade-up">foods and beverages</h3>
                      <p data-aos="fade-up">
                        Plastics are a wide range of synthetic or semi-synthetic materials that use polymers as a main ingredient. Their plasticity makes it possible for plastics ...
                      </p>
                      <button data-aos="fade-up">partner with us</button>
                    </section>
                </div>
                <div data-aos="fade-up" className='thumbnail_'>
                  <img src={img4}/>
                </div>
              </section>
          </Carousel.Item>
          

          
          <Carousel.Item>
              <section className='carousel_container'>
                {/* <img src={img}/> */}
                <div className='note'>
                  <section className='home_banner_container'>
                    <h3 data-aos="fade-up">foods and beverages</h3>
                      <p data-aos="fade-up">
                        Plastics are a wide range of synthetic or semi-synthetic materials that use polymers as a main ingredient. Their plasticity makes it possible for plastics ...
                      </p>
                      <button data-aos="fade-up">partner with us</button>
                    </section>
                </div>
                <div data-aos="fade-up" className='thumbnail_'>
                  <img src={img5}/>
                </div>
              </section>
          </Carousel.Item>


          <Carousel.Item>
              <section className='carousel_container'>
                {/* <img src={img}/> */}
                <div className='note'>
                  <section className='home_banner_container'>
                    <h3 data-aos="fade-up">foods and beverages</h3>
                      <p data-aos="fade-up">
                        Plastics are a wide range of synthetic or semi-synthetic materials that use polymers as a main ingredient. Their plasticity makes it possible for plastics ...
                      </p>
                      <button data-aos="fade-up">partner with us</button>
                    </section>
                </div>
                <div className='thumbnail_'>
                  <img src={img6}/>
                </div>
              </section>
          </Carousel.Item>

        </Carousel>
        
    </section>
{/* 
    <section className='lastest_product_grid'>
      <section className='lastest_product_grid_sect1'>
        <div className='lastest_product_grid_sect1_top'>
          <span className='lastest_product_grid_sect1_top_title'>lastest</span>
          <span className='lastest_product_grid_sect1_top_subtitle'><span>pro</span>ducts</span>
        </div>
        <div className='lastest_product_grid_sect1_bottom'>
          <span className='lastest_product_grid_sect1_bottom_img' style={{backgroundImage: `url(${ require("./img/product1.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
          <div className='lastest_product_grid_sect1_bottom_titles'>
          <span className='lastest_product_grid_sect1_bottom_name'>white chair</span>
          <span className='lastest_product_grid_sect1_bottom_price'>$63</span>
          </div>
        </div>
      </section>

      <section className='lastest_product_grid_sect2'>
        <div className='lastest_product_grid_sect2_top'>
        <span className='lastest_product_grid_sect1_bottom_img' style={{backgroundImage: `url(${ require("./img/product4.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
          <div className='lastest_product_grid_sect1_bottom_titles'>
          <span className='lastest_product_grid_sect1_bottom_name'>white chair</span>
          <span className='lastest_product_grid_sect1_bottom_price'>$63</span>
          </div>
        </div>
        <div className='lastest_product_grid_sect2_bottom'>
        <span className='lastest_product_grid_sect1_bottom_img' style={{backgroundImage: `url(${ require("./img/product2.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
          <div className='lastest_product_grid_sect1_bottom_titles'>
          <span className='lastest_product_grid_sect1_bottom_name'>white chair</span>
          <span className='lastest_product_grid_sect1_bottom_price'>$63</span>
          </div>
        </div>
      </section>

      <section className='lastest_product_grid_sect3'>
        <div className='lastest_product_grid_sect3_thumbnail'>
          <span className='lastest_product_grid_sect3_thumbnail_img' style={{backgroundImage: `url(${ require("./img/product5.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
          <span className='lastest_product_grid_sect3_thumbnail_name'>celling lamp</span>
          <span className='lastest_product_grid_sect3_thumbnail_price'>$199</span>
        </div>
      </section>
    </section> */}

{/* 
    <section className='home_products_section'>
      <div className='home_products_section_item'>
        <a href="http://home">
          <span className='home_products_section_img' style={{backgroundImage: `url(${ require("./img/product1.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
        </a>
        <span className='home_products_section_info'>
          <span className='home_products_section_info_name'>serviettes cell babby</span>
          <span className='home_products_section_info_price'>$ 200 <small>- each</small></span>
        </span>
      </div>

      <div className='home_products_section_item'>
        <a href="http://home">
          <span className='home_products_section_img' style={{backgroundImage: `url(${ require("./img/product2.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
        </a>
        <span className='home_products_section_info'>
          <span className='home_products_section_info_name'>serviettes cell babby</span>
          <span className='home_products_section_info_price'>$ 200 <small>- each</small></span>
        </span>
      </div>

      <div className='home_products_section_item'>
        <a href="http://home">
          <span className='home_products_section_img' style={{backgroundImage: `url(${ require("./img/product3.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
        </a>
        <span className='home_products_section_info'>
          <span className='home_products_section_info_name'>serviettes cell babby</span>
          <span className='home_products_section_info_price'>$ 200 <small>- each</small></span>
        </span>
      </div>


      <div className='home_products_section_item'>
        <a href="http://home">
          <span className='home_products_section_img' style={{backgroundImage: `url(${ require("./img/product4.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
        </a>
        <span className='home_products_section_info'>
          <span className='home_products_section_info_name'>serviettes cell babby</span>
          <span className='home_products_section_info_price'>$ 200 <small>- each</small></span>
        </span>
      </div>

      <div className='home_products_section_item'>
        <a href="http://home">
          <span className='home_products_section_img' style={{backgroundImage: `url(${ require("./img/product5.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
        </a>
        <span className='home_products_section_info'>
          <span className='home_products_section_info_name'>serviettes cell babby</span>
          <span className='home_products_section_info_price'>$ 200 <small>- each</small></span>
        </span>
      </div>

      <div className='home_products_section_item'>
        <a href="http://home">
          <span className='home_products_section_img' style={{backgroundImage: `url(${ require("./img/product3.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
        </a>
        <span className='home_products_section_info'>
          <span className='home_products_section_info_name'>serviettes cell babby</span>
          <span className='home_products_section_info_price'>$ 200 <small>- each</small></span>
        </span>
      </div>
    </section>
    <div className='home_products_section_morebtn'>
      <a href=""><button type='button'>see more</button></a>
    </div>
*/}
    </>
  )
}
