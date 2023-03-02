import React, { useState,useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { useDispatch,useSelector } from 'react-redux';
import { constantActions } from '../store/constantSlice';

export default function Cart() {

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  const dispatch = useDispatch();

  dispatch(constantActions.updatePageTitles("Cart"));
  dispatch(constantActions.setCurrentPage("cart"));

  const cartData = useSelector(state=>state.constant.cartData.cartItems);
  const cartSubTotal = useSelector(state=>state.constant.cartData.totalCartPrice);
  const shipping = useSelector(state=>state.constant.cartData.shippingFree);


  /* useEffect(()=>{
    dispatch(constantActions.cartTotal());
  }) */

  function CartItem({data}){

    /* add plus one quantity */
    function addFromCart(){
      dispatch(constantActions.addFromCart(data.id));
      dispatch(constantActions.updateSubtotal());
      /* dispatch(constantActions.cartTotal()); */
    }

    /* reduces minus one quantity */
    function reduceFromCart(){
      dispatch(constantActions.reduceFromCart(data.id));
      dispatch(constantActions.updateSubtotal());
      /* dispatch(constantActions.cartTotal()); */
    }

    /* removes product from cart */
    function removeFromCart(){
      dispatch(constantActions.removeFromCart(data.id));
        
      // updating cart data
      dispatch(constantActions.updateCartCount());
      /* dispatch(constantActions.cartTotal()); */
    }

    return(
      <div className='cart-container'>
        <div className='cart_img'>
          <img src={require("./img/product3.png")} alt="" />
        </div>
        
        
        <div className='cart_details'>
          <span className='cart_name'>
            {data.name} -
              <span style={{color:"grey"}}>
                {data.description}
              </span>
            </span>
          <span className='cart_price'>
              {data.initialPrice.formatted_with_symbol} 
              <a href={"/cart/"+data.id} className='detial'> . detials</a>
            </span>
        </div>
        <div className='cart_quantity'>
          <span onClick={reduceFromCart}>-</span>
          <span className='cart_quantity_number'>{data.quantity}</span>
          <span onClick={addFromCart}>+</span>
        </div>
        <div className='cart_total'>{data.subtotal.formatted_with_symbol}</div>
        <div className='cart_close'>
          <span onClick={removeFromCart}><i className="fa fa-close"></i></span>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="shopping_cart_section">
        <section className='cart_main'>
          <h2>your shopping cart</h2>

          <section className='cartcontainer_main'>
            {/* header */}
            {cartData.map(function(item){
              return <CartItem key={item.id} data={item}/>
            })}

          </section>
        </section>

        {/* aside */}
        <section className='cart_aside'>
          <div data-aos="fade-up" className='cart_summary'>
            <div className='cart_summary_subtotal'>
              <span>subtotal</span>
              <span className='cart_price_m'>
                {cartSubTotal.formatted_with_symbol}
              </span>
            </div>
            <div className='cart_summary_shipping'>
              <span>estimated shipping</span>
              <span className='cart_price_m'>{shipping.formatted_with_symbol}</span>
            </div>
            <div className='cart_summary_total'>
              <span>total</span>
              <span className='cart_price_m'>$230.00</span>
            </div>
          </div>

          <div data-aos="fade-up" className='paymentlisting'>
            <span className='paymentlisting_heading'>accepted payment methods</span>
            <div className='paymentlisting_methodBox'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className='cart_proced_section'>
            <button data-aos="fade-up">proceed</button>
          </div>
        </section>
      </section>
    </>
  )
}
