import React, { useState } from "react";
import axios from "axios";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import "../css/BrandsComponent.css"
import { constantActions } from '../../../store/constantSlice';
import { useEffect } from "react";
import DashFooter from "./DashFooter";

export function showAdd(){
  $("#slideform").slideToggle("slow");
}

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
  
  $("#slideform").hide();

  const  [brandsCount,setBrandsCount] = useState("");
  const  [brandsImage,setBrandsImage] = useState("");
  const  [brandsName,setBrandsName] = useState("");
  const  [brandsDescription,setBrandsDescription] = useState("");
  const  [brandsLink,setBrandsLink] = useState("");


  return (
    <>
      <section className="BrandsComponent-section">
        <div className="BrandsComponent-section-head">
          <h2>Brands</h2>
          <button onClick={showAdd} type="button"><i className="fa fa-add" style={{color:"white", fontSize:"13px"}}></i> add brand</button>
        </div>

        <div id="slideform">
          <form action="" method="post" className="addData">
            <table border={0} cellPadding={5}>
              <tr>
                <td>count</td>
                <td><input value={brandsCount} type="text" name="" id="" /></td>
              </tr>

              <tr>
                <td>name</td>
                <td><input type="text" name="" id="" /></td>
              </tr>

              <tr>
                <td>description</td>
                <td><textarea name="" id="" cols="30" rows="10"></textarea></td>
              </tr>

              <tr>
                <td>link</td>
                <td><input type="text" name="" id="" /></td>
              </tr>
            </table>

            <div className="addimage">
              <span>drag drop</span>
              <input type="file" name="" id="" />
            </div>

            <div className="addsave">
              <button type="submit">save</button>
            </div>
          </form>
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
