import {React,useState,useEffect} from 'react'
import orderimg from "./img/chair.png"
import { commerce } from './lib/commerce';
import {useSelector,useDispatch} from "react-redux";



export default function Orders() {

  const [orders,setOrders] = useState()
  const [OrderCategories,setOrderCategories] = useState([])

  const getOrders = async ()=>{
    const {data} = await commerce.products.list();
    setOrders(data)
  }

  const getOrderCategories = async ()=>{
    const {data} = await commerce.categories.list();
    setOrderCategories(data)
  }

  /* update on useEffect */
  useEffect(()=>{
    getOrders()
    getOrderCategories()
  },[])
  
  /* update every after 1000 seconds */
  setInterval(() => {
    getOrders()
    getOrderCategories()
  }, 1000);



  /* order item */
function OrderItem({id,name,image,price}){
  return(
    <div className='order_section_card'>
      <span className='order_section_card_img'>
        <img src={image} alt="" />
      </span>
      <span className='order_section_card_title'><a href=''>{name}</a></span>
      <span className='order_section_card_price'>
        <span>{price}</span>
        <span><i className="fa fa-cart-plus"></i></span>
      </span>
    </div>
  )
}



function FilterOptions({data}){
  return(
    <option value={data.slug}>{data.name}</option>
  );
}
  



  return (
    <>
    <div className='filterbar'>
      filter 
      <select name="" id="">
        <option value="all">all categories</option>
            {
            OrderCategories.map(function(item){
              return(
                <FilterOptions key={item.id} data={item}/>
              )
            })
            }
      </select>
    </div>

    <section className='order_section'>
      {
      orders && orders.map(function(item){
        return (<OrderItem key={item.id} id={item.id} image={item.image.url} name={item.name} price={item.price.formatted_with_symbol}/>)
      })
      }

      {
      !orders && <span style={{color: "red"}}>loading...</span>
      }
    </section>
    
    <div className='seemore_section'>
      <button type='button' className='seemore_section_btn'>see more</button>
    </div>
    </>
  )
}
