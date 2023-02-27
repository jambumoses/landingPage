import React from 'react'
import {useSelector} from "react-redux"

function FooterBrandItem({image}){
  return(
    <div className='footer_brands_item'>
      <img src={require(`${image}`)} alt="" />
    </div>    
  )
}




export default function FooterBrands() {
  
  const constantInfo = useSelector(state=>state.constant.data)
  
  return (
    <section className='footer_brands'>
      {
        constantInfo.Footerbrands.map(function(item){
          return(
            <FooterBrandItem key={item.count} image={item.image}/>
          )
        })
      }
{/*         <div className='footer_brands_item'>
          <img src={require("./img/brand1.png")} alt="" />
        </div>
        <div className='footer_brands_item'>
          <img src={require("./img/brand2.png")} alt="" />
        </div>
        <div className='footer_brands_item'>
          <img src={require("./img/brand3.png")} alt="" />
        </div>
        <div className='footer_brands_item'>
          <img src={require("./img/brand4.png")} alt="" />
        </div>
        <div className='footer_brands_item'>
          <img src={require("./img/brand5.png")} alt="" />
        </div> */}
    </section>
  )
}
