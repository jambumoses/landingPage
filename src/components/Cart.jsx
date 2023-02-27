import React from 'react'

export default function Cart() {
  return (
    <>
      <section className="shopping_cart_section">
        <section className='cart_main'>
          <h2>your shopping cart</h2>

          <section className='cartcontainer_main'>
            {/* header */}
            <div className='cart-container'>
                <div className='cart_img' style={{backgroundImage: `url(${ require("./img/product3.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
                <div className='cart_details'>
                  <span className='cart_name'>Analog magazine rack</span>
                  <span className='cart_price'>$ 120</span>
                </div>
                <div className='cart_quantity'>
                  <span>-</span>
                  <span className='cart_quantity_number'>20</span>
                  <span>+</span>
                </div>
                <div className='cart_total'>$ 200</div>
                <div className='cart_close'>
                  <span><i className="fa fa-close"></i></span>
                </div>
              </div>

            <div className='cart-container'>
              <div className='cart_img' style={{backgroundImage: `url(${ require("./img/product3.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
              <div className='cart_details'>
                <span className='cart_name'>Analog magazine rack</span>
                <span className='cart_price'>$ 120</span>
              </div>
              <div className='cart_quantity'>
                <span>-</span>
                <span className='cart_quantity_number'>20</span>
                <span>+</span>
              </div>
              <div className='cart_total'>$ 200</div>
              <div className='cart_close'>
                <span><i className="fa fa-close"></i></span>
              </div>
            </div>


            <div className='cart-container'>
              <div className='cart_img' style={{backgroundImage: `url(${ require("./img/product3.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
              <div className='cart_details'>
                <span className='cart_name'>Analog magazine rack</span>
                <span className='cart_price'>$ 120</span>
              </div>
              <div className='cart_quantity'>
                <span>-</span>
                <span className='cart_quantity_number'>20</span>
                <span>+</span>
              </div>
              <div className='cart_total'>$ 200</div>
              <div className='cart_close'>
                <span><i className="fa fa-close"></i></span>
              </div>
            </div>



            <div className='cart-container'>
              <div className='cart_img' style={{backgroundImage: `url(${ require("./img/product3.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
              <div className='cart_details'>
                <span className='cart_name'>Analog magazine rack</span>
                <span className='cart_price'>$ 120</span>
              </div>
              <div className='cart_quantity'>
                <span>-</span>
                <span className='cart_quantity_number'>20</span>
                <span>+</span>
              </div>
              <div className='cart_total'>$ 200</div>
              <div className='cart_close'>
                <span><i className="fa fa-close"></i></span>
              </div>
            </div>
          </section>
        </section>

        {/* aside */}
        <section className='cart_aside'>
          <div className='cart_summary'>
            <div className='cart_summary_subtotal'>
              <span>subtotal</span>
              <span className='cart_price_m'>$230.00</span>
            </div>
            <div className='cart_summary_shipping'>
              <span>estimated shipping</span>
              <span className='cart_price_m'>$17.00</span>
            </div>
            <div className='cart_summary_total'>
              <span>total</span>
              <span className='cart_price_m'>$230.00</span>
            </div>
          </div>

          <div className='paymentlisting'>
            <span className='paymentlisting_heading'>accepted payment methods</span>
            <div className='paymentlisting_methodBox'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className='cart_proced_section'>
            <button>proceed</button>
          </div>
        </section>
      </section>
    </>
  )
}
