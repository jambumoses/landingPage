import React from "react";
import "../css/TrendsComponent.css";
import { constantActions } from '../../../store/constantSlice';
import { useDispatch, useSelector } from "react-redux";
import DashFooter from "./DashFooter";

export default function TrendsComponent() {

  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.merchant.CompanyTitle)

  // page titles
  dispatch(constantActions.updatePageTitles(companyName+" . "+"Trends"));
  dispatch(constantActions.setCurrentPage("DashTrends"));

  const DashTopSells = useSelector(state=>state.products.TopSells);

  return (
    <>
      <section className="TrendsComponent-section">
        <h2>Trends</h2>

        <section className="products-section">
          <div className="products-section-item">
            <span>image</span>
            <span>product</span>
            <span>category</span>
            <span>orders</span>
            <span>decription</span>
            <span>price</span>
{/*             <span>
              <button>edit</button>
              <button>delete</button>
            </span> */}
          </div>

          {
            DashTopSells.map(function(items){
              return(
                <div className="products-section-item products-section-item-main" key={items._id} style={{alignItems:"center"}}>
                  <span className="products-section-item-image"><img src={Image.url} alt="" /></span>
                  <span className="products-section-item-name" >{items.name}</span>
                  <span className="products-section-item-category">{items.category }</span>
                  <span className="products-section-item-slug"> {items.orders} orders</span>
                  <span className="products-section-item-description">{items.description.slice(0,100)} ...</span>
                  <span className="products-section-item-price">{items.initialPrice.formatted_with_symbol}</span>
                </div>
              )
            })
          }
 
        </section>

        <DashFooter/>
      </section>
    </>
  );
}
