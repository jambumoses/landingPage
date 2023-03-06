import {React,useState,useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import $ from "jquery";
import orderimg from "./img/chair.png"
import { commerce } from './lib/commerce';
import {useSelector,useDispatch} from "react-redux";
import { constantActions } from '../store/constantSlice';

import image1 from "./img/nobg/77f336891733e356d4d9c8a93ed9c942-removebg-preview.png";
import image2 from "./img/nobg/PAP2-removebg-preview.png";
import image3 from "./img/nobg/Maruti-Tissue-removebg-preview.png";
import image4 from "./img/nobg/50233e9f6cc82aeccb43483efff43623-removebg-preview.png";
import image5 from "./img/nobg/denny-muller-s9zGsWDiFO4-unsplash-removebg-preview.png";
import image6 from "./img/nobg/images__1_-removebg-preview.png";
import image7 from "./img/nobg/malik-skydsgaard-7I8pZ8mtotg-unsplash-removebg-preview.png";
import image8 from "./img/nobg/images-removebg-preview.png";
import { cartActions } from '../store/CartSlice';


export default function Orders() {

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);


  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.merchant.CompanyTitle)

  // page titles
  dispatch(constantActions.updatePageTitles(companyName+" . "+"Order Now"));
  dispatch(constantActions.setCurrentPage("orders"));

  // fetching products 
  const products = useSelector(state=>state.products.products)
  // fetching categories
  const categoriesData = useSelector(state=>state.categories.categories)

  const [filterByCategoriesSearch,setfilterByCategoriesSearch] = useState('all')

  // see more button
  const [seeMoreButton,setSeeMoreButton] = useState(12);

  function seeMoreButtonFnc(){
    let newLimit = seeMoreButton + 12;
    setSeeMoreButton(newLimit)
  }

  /* order item */
function OrderItem({data}){

  
  function addToCart(){
    dispatch(cartActions.addToCart(data));
    
    // refreshing cart count
    dispatch(cartActions.updateCartCount());
  }



  return(
    <div data-aos="fade-up" className='order_section_card'>
      <span className='order_section_card_img'>
        <img src={data.images.url} alt="" />
      </span>
      <span className='order_section_card_title'><a href=''>{data.name.slice(0,20)} .</a> <span>{data.description.slice(0,90)}...</span></span>
      <span className='order_section_card_price'>
        <span>{data.initialPrice.formatted_with_symbol}</span>
        <span onClick={addToCart}><i className="fa fa-cart-plus"></i></span>
      </span>
    </div>
  )
}



function FilterOptions({data}){
  return(
    <option value={data.slug}>{data.category}</option>
  );
}
  
function filterByCategories(e){
  setfilterByCategoriesSearch(e.target.value)
}


function FilteredProducts({filt,products}){
    if (filt == "all"){
      products && products.map(function(filteredProduct){
        return(
          <OrderItem key={filteredProduct.id} data={filteredProduct}/>
        )
      })
    }else{
      products && products.filter(product => product.slug == filt).map(function(filteredProduct){
        return(
          <OrderItem key={filteredProduct.id} data={filteredProduct}/>
        )
      })
    }
}

  return (
    <>
    <div className='filterbar'>
      filter 
      <select name="" onChange={filterByCategories} value={filterByCategoriesSearch}>
        <option value="all">all categories</option>
            {
            categoriesData.map(function(item){
              return(
                <FilterOptions key={item.id} data={item}/>
              )
            })
            }
      </select>
    </div>

    <section className='order_section'>
      {
        products && (filterByCategoriesSearch == "all") ? products.slice(0,seeMoreButton).map(function(filteredProduct){
        return(<OrderItem key={filteredProduct.id} data={filteredProduct}/>)
        }) : (filterByCategoriesSearch != "all") ?
         products.filter(product => product.slug == filterByCategoriesSearch).map(function(filteredProduct){
          return(
            <OrderItem key={filteredProduct.id} data={filteredProduct}/>
          )
        }) : null


      }

      {
      //!products && <span style={{color: "red"}}>loading...</span>
      }
    </section>
    
    {
      (seeMoreButton > products.length)? null:
      <div className='seemore_section'>
        <button onClick={seeMoreButtonFnc} type='button' className='seemore_section_btn'>see more {seeMoreButton}</button>
      </div>
    }
    </>
  )
}
