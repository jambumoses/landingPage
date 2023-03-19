import React from "react";
import "../css/ProductsComponent.css";
import { constantActions } from '../../../store/constantSlice';
import { useDispatch, useSelector } from "react-redux";
import DashFooter from "./DashFooter";

export default function ProductsComponent() {
  
  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.merchant.CompanyTitle)

  // page titles
  dispatch(constantActions.updatePageTitles(companyName+" . "+"Products"));
  dispatch(constantActions.setCurrentPage("DashProducts"));

  const Dashproducts = useSelector(state=>state.products.products);

  function DashProductItem({data}){
    return(
      <div className="products-section-item products-section-item-main" style={{alignItems:"center"}}>
        <span className="products-section-item-image"><img src={data.images.url} alt="" /></span>
        <span className="products-section-item-name">{data.name}</span>
        <span className="products-section-item-category">{data.category}</span>
        <span className="products-section-item-slug">{data.slug}</span>
        <span className="products-section-item-description">{data.description.slice(0,100)} ...</span>
        <span className="products-section-item-price">{data.initialPrice.formatted_with_symbol}</span>
        <span className="products-section-item-buttons">
        <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> </button>
              <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
        </span>
      </div>
    )
  }


  return (
    <section className="ProductComponent-section">
      <div className="ProductComponent-head">
        <h2>products</h2>
        <div className="ProductComponent-filter">
          <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-add"></i> add product</button>
          <span className="ProductComponent-filter-search">
            <input type="search" placeholder="Search For Product" name="" id="" />
            <span><i className="fa fa-search"></i></span>
          </span>
        </div>
      </div>

      <hr />
        <section className="products-section">
          <div className="products-section-item">
            <span>image</span>
            <span>product</span>
            <span>category</span>
            <span>slug</span>
            <span>decription</span>
            <span>price</span>
            <span>
{/*               <button>edit</button>
              <button>delete</button> */}
            </span>
          </div>

          {
            Dashproducts.map(function(item){
              return(
                <DashProductItem key={item._id} data={item}/>
              )
            })
          }

        </section>
        <DashFooter/>
    </section>
  );
}
