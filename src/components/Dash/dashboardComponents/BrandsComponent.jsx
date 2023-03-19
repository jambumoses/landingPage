import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "../css/BrandsComponent.css"
import { constantActions } from '../../../store/constantSlice';
import { useEffect } from "react";
import DashFooter from "./DashFooter";

export default function BrandsComponent() {

  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.merchant.CompanyTitle)

  // page titles
  dispatch(constantActions.updatePageTitles(companyName+" . "+"Brands"));
  dispatch(constantActions.setCurrentPage("DashBrands"));


  const Dashbrands = useSelector(state=>state.brands.brands.brands);


  function DashBrandItem({data}){
    return(
      <div className="BrandsDash-item">
        <span className="BrandsDash-item-count">{data.count}</span>
        <span className="BrandsDash-item-thumbnail">
          <img src={data.image} alt="" />
        </span>
        <span className="BrandsDash-item-title">{data.name}</span>
        <span className="BrandsDash-item-description">
          {data.description}
        </span>
        <span className="BrandsDash-item-link">{data.link}</span>
        <span className="BrandsDash-item-buttons">
        <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
            <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> update</button>
        </span>
      </div>
    )
  }

  return (
    <>
      <section className="BrandsComponent-section">
        <div className="BrandsComponent-section-head">
          <h2>Brands</h2>
          <button type="button"><i className="fa fa-add" style={{color:"white", fontSize:"13px"}}></i> add brand</button>
        </div>

        <section>
          <hr />
          <div className="BrandsDash-container">
            {
              Dashbrands.map((item)=>{
                return(
                  <DashBrandItem key={item._id} data={item}/>
                )
              })
            }
            
          </div>
        </section>
        <DashFooter/>
      </section>
    </>
  );
}
