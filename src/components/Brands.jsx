import {React,useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import {useSelector, useDispatch} from "react-redux"
import { constantActions } from '../store/constantSlice';


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
        {description}
      </span>
      <a href={link}>see more</a>
    </div>
  )
}





export default function Brands() {

  const dispatch = useDispatch();

  dispatch(constantActions.updatePageTitles("Brands"));
  dispatch(constantActions.setCurrentPage("brands"));

  const constantInfo = useSelector(state=>state.constant.data)
  const BrandHeading = useSelector(state=>state.constant.data.brands.heading)

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  return (
    <>
      <section className='brand_banner'>
          <div className='brand_banner_note'>
            <h1>Our Partners</h1>
            <p>brands the we work with for the delivery and great product demand and suplies to fuel up the system.</p>
          </div>

          <div className='brand_banner_thumbnail'>
            <img src={require("./img/brands_banner1.png")} alt="" />
          </div>
      </section>

      <div className='brand_title'>
        <span data-aos="fade-up"> {BrandHeading}</span>
      </div>

      <section className='brand_section'>
        {constantInfo.brands.brands.map(function(item){
          return(
            <BrandCard key={item.count} count={item.count} name={item.name} description={item.description} image={item.image} link={item.link}/>
          )
        })}
      </section>
    </>
  )
}
