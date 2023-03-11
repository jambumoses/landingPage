import {React,useEffect, useState} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import {useSelector, useDispatch} from "react-redux"
import { constantActions } from '../store/constantSlice';
import axios from 'axios';
import { bannerActions } from '../store/BannerSlice';
import { BrandsActions } from '../store/BrandsSlice';


/* brand Cards */
function BrandCard({count,name,image,link,description}){

  return(
    <div data-aos="fade-up" className='brand'>
      <span className='brand_count'>{count}</span>
      <span className='brand_name'>{name}</span>
      <span className='brand_image'>
        <img src={image} alt={name} />
      </span>
      <span className='brand_description'>
        {description.slice(0,100)} ...
      </span>
      <a href={link}>see more</a>
    </div>
  )
}





export default function Brands() {

  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.merchant.CompanyTitle)

  dispatch(constantActions.updatePageTitles(companyName+" . "+"Brands"));
  dispatch(constantActions.setCurrentPage("brands"));

  //  banner information
  const BrandBanner = useSelector(state=>state.banner.brandsBanner);

  
  // brands data
  const brands = axios.create({
    baseURL: "http://localhost:3500/arafat/api/brands",
    Headers: {
      "Content-type": "application/json",
    },
  });
  
     // brands data
     brands.get().then((response)=>{
      dispatch(BrandsActions.getBrands(response.data))
     });
     
  // brands data
  const BrandsData = useSelector(state=>state.brands.brands)

  const brandsBanner = axios.create({
    baseURL: "http://localhost:3500/arafat/api/banners/brandsbanner",
    Headers: {
      "Content-type": "application/json",
    },
  });


  useEffect(()=>{
    Aos.init({duration: 2000});

    brandsBanner.get().then((response)=>{
      dispatch(bannerActions.getBrandsBanner(response.data[0]))
     });
  },[]);

  return (
    <>
      <section className='brand_banner' style={{backgroundColor: BrandBanner.backgroundColor}}>
          <div className='brand_banner_note'>
            <h1 data-aos="fade-right" style={{color: BrandBanner.title.color}}>{BrandBanner.title.content}</h1>
            <p data-aos="fade-right" style={{color: BrandBanner.description.color}}>{BrandBanner.description.content}</p>
          </div>

          <div className='brand_banner_thumbnail'>
            <img src={require(`${BrandBanner.image.url}`)} alt="" />
          </div>
      </section>

      {/* brand heading */}
      <div className='brand_title'>
        <span data-aos="fade-up"> {BrandsData.heading}</span>
      </div>

      {/* brand listing */}
      <section className='brand_section'>
        {BrandsData.brands.map(function(item){
          return(
            <BrandCard key={item.count} count={item.count} name={item.name} description={item.description} image={item.image} link={item.link}/>
          )
        })}
      </section>
    </>
  )
}
