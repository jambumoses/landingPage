import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import img from "../components/img/pic1.jpg";
import img1 from "../components/img/pic2.jpg";
import { useSelector,useDispatch } from 'react-redux';
import { commerce } from './lib/commerce';
import { constantActions } from '../store/constantSlice';


export default function Home() {

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


  return (
    <>
    <section className='wrapper'>
        <Carousel prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" style={{fontSize: "10px"}} />} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />} interval={2000} indicators={false} pause={false} style={{backgroundColor:"transparent",height: "100vh",width:"100%"}}>
          <Carousel.Item>
              <section className='carousel_container'>
              <img src={img}/>
              </section>
          </Carousel.Item>

          <Carousel.Item>
              <section className='carousel_container'>
              <img src={img1}/>
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
