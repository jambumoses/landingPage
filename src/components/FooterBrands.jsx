import React from 'react'
import {useSelector} from "react-redux"

function FooterBrandItem({image}){
  return(
    <div className='footer_brands_item'>
      <img src={image} alt="" />
    </div>    
  )
}




export default function FooterBrands() {
  
  const constantInfo = useSelector(state=>state.constant.data)
  const brandsData = useSelector(state=>state.brands.brands.brands)
  
  return (
    <section className='footer_brands'>
      {
        brandsData.slice(0,4).map(function(item){
          return(
            <FooterBrandItem key={item.id} image={item.image}/>
          )
        })
      }
    </section>
  )
}
