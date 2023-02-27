import {React,useState,useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { commerce } from './lib/commerce';

export default function Categories() {

  const [Categories,setCategories] = useState([])

  //const [RandomCategories,setRandomCategories] = useState()

  //Math.floor(Math.random() * Categories.length)

  const getCategories = async ()=>{
    const {data} = await commerce.categories.list();
    setCategories(data)
  }

  /* update on useEffect */
  useEffect(()=>{
    getCategories()
  },[])

  /* update every after 1000 seconds */
  setInterval(() => {
    getCategories()
  }, 1000);


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
      <div className='category_container' style={{marginTop:"0px"}}>
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
          <div className='category_in_specific_item_top_info_head'>our collection</div>
          <div className='category_in_specific_item_top_info_content'>
            <span className='category_in_specific_item_top_info_content_title'>{data.name}</span>
            <span className='category_in_specific_item_top_info_content_description'>
              {data.description}
            </span>
          </div>
        </div>
        <div className='category_in_specific_item_top_img'>
          <span className='category_in_specific_item_top_img_btns'>
            <a href="">Check</a>
            <a href=""><i className="fa fa-cart-plus"></i></a>
          </span>
          <span className='category_in_specific_item_top_img_thumbnail'>
            <img src={data.assets[0].url} alt="" />
          </span>
        </div>
      </div>
    )
  }

  function CategoryComponents({data}){
    console.log(data)
    return(
      <div className='category_in_specific_item'>
        <div className='category_in_specific_item_img'>
          <img src={data.assets[0].url} alt="" />
        </div>
        <div className='category_in_specific_item_info'>
          <div className='category_in_specific_item_info_title'>{data.name}</div>
          <div className='category_in_specific_item_info_content'>
          {data.description}
          </div>
          <div className='category_in_specific_item_info_prices'>
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
        <div className='category_in_specific_item_img'>
          <img src={data.assets[0].url} alt="" />
        </div>
        <div className='category_in_specific_item_info'>
          <div className='category_in_specific_item_info_title'>{data.name}</div>
          <div className='category_in_specific_item_info_content'>
          {data.description}
          </div>
          <div className='category_in_specific_item_info_prices'>
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
{/* 
          {(Categories.length > 0) && <ScrollCategory data={Categories}/>}

          {(Categories.length > 0) && <CategoryBody data={Categories}/>} */}


          <div className='category_container'>
            <div className='category_container_title'>
              <span>Top sellers</span>
              <span><a href="#">see all</a></span>
            </div>
            <div className='category_listing'>
                <Slider {...settings}>
                  <div className='category_listing_item'>
                    <span className='category_listing_item_img'></span>
                    <span className='category_listing_item_info'>
                      <span className='category_listing_item_info_name'><a href="">love chair</a></span>
                      <span className='category_listing_item_info_price'>$200</span>
                    </span>
                  </div>

                  <div className='category_listing_item'>
                    <span className='category_listing_item_img'></span>
                    <span className='category_listing_item_info'>
                      <span className='category_listing_item_info_name'><a href="">love chair</a></span>
                      <span className='category_listing_item_info_price'>$200</span>
                    </span>
                  </div>

                  <div className='category_listing_item'>
                    <span className='category_listing_item_img'></span>
                    <span className='category_listing_item_info'>
                      <span className='category_listing_item_info_name'><a href="">love chair</a></span>
                      <span className='category_listing_item_info_price'>$200</span>
                    </span>
                  </div>

                  <div className='category_listing_item'>
                    <span className='category_listing_item_img'></span>
                    <span className='category_listing_item_info'>
                      <span className='category_listing_item_info_name'><a href="">love chair</a></span>
                      <span className='category_listing_item_info_price'>$200</span>
                    </span>
                  </div>


                  <div className='category_listing_item'>
                    <span className='category_listing_item_img'></span>
                    <span className='category_listing_item_info'>
                      <span className='category_listing_item_info_name'><a href="">love chair</a></span>
                      <span className='category_listing_item_info_price'>$200</span>
                    </span>
                  </div>

                  <div className='category_listing_item'>
                    <span className='category_listing_item_img'></span>
                    <span className='category_listing_item_info'>
                      <span className='category_listing_item_info_name'><a href="">love chair</a></span>
                      <span className='category_listing_item_info_price'>$200</span>
                    </span>
                  </div>

                  <div className='category_listing_item'>
                    <span className='category_listing_item_img'></span>
                    <span className='category_listing_item_info'>
                      <span className='category_listing_item_info_name'><a href="">love chair</a></span>
                      <span className='category_listing_item_info_price'>$200</span>
                    </span>
                  </div>
                </Slider>
            </div>
          </div>

        </section>
        
        <section className='categories_aside_section'>
          {(Categories.length > 0) && <ProductRange data={Categories}/>}
        </section>
      </div>
    </section>
    </>
  )
}
