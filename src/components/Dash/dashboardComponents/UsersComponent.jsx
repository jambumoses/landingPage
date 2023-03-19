import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/UsersComponent.css";
import { constantActions } from '../../../store/constantSlice';
import DashFooter from "./DashFooter";

export default function UsersComponent() {

  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.merchant.CompanyTitle);

  // page titles
  dispatch(
    constantActions.updatePageTitles(companyName + " . " + "Users")
  );
  dispatch(constantActions.setCurrentPage("DashUsers"));

  return (
    <>
    <section className="ProductComponent-section">
        <div className="ProductComponent-head">
          <h2>users <sup style={{fontSize:"18px",fontWeight:"500",color:"lightgray"}}>200k</sup> </h2>
          <div className="ProductComponent-filter">
            <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-add"></i> new user</button>
            <span className="ProductComponent-filter-search">
              <input type="search" placeholder="Search For user" name="" id="" />
              <span><i className="fa fa-search"></i></span>
            </span>
          </div>
        </div>

        <hr />
          <section className="products-section">
            <div className="products-section-item">
              <span>profile</span>
              <span>first name</span>
              <span>last name</span>
              <span>previleges</span>
              <span>email</span>
              <span style={{paddingLeft:"20px"}}>orders</span>
              <span>
  {/*               <button>edit</button>
                <button>delete</button> */}
              </span>
            </div>

            <div className="products-section-item products-section-item-main" style={{alignItems:"center"}}>
              <span className="products-section-item-image"><img src="" alt="" /></span>
              <span className="products-section-item-name">jambu</span>
              <span className="products-section-item-category">moses</span>
              <span className="products-section-item-slug">admin</span>
              <span className="products-section-item-description">jumbogift32@gmail.com</span>
              <span className="products-section-item-price" style={{paddingLeft:"20px"}}>500</span>
              <span className="products-section-item-buttons">
              <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eye"></i> </button>
                    <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
              </span>
            </div>

            <div className="products-section-item products-section-item-main" style={{alignItems:"center"}}>
              <span className="products-section-item-image"><img src="" alt="" /></span>
              <span className="products-section-item-name">jambu</span>
              <span className="products-section-item-category">moses</span>
              <span className="products-section-item-slug">admin</span>
              <span className="products-section-item-description">jumbogift32@gmail.com</span>
              <span className="products-section-item-price" style={{paddingLeft:"20px"}}>500</span>
              <span className="products-section-item-buttons">
              <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eye"></i> </button>
                    <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
              </span>
            </div>

            <div className="products-section-item products-section-item-main" style={{alignItems:"center"}}>
              <span className="products-section-item-image"><img src="" alt="" /></span>
              <span className="products-section-item-name">jambu</span>
              <span className="products-section-item-category">moses</span>
              <span className="products-section-item-slug">admin</span>
              <span className="products-section-item-description">jumbogift32@gmail.com</span>
              <span className="products-section-item-price" style={{paddingLeft:"20px"}}>500</span>
              <span className="products-section-item-buttons">
              <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eye"></i> </button>
                    <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
              </span>
            </div>

            <div className="products-section-item products-section-item-main" style={{alignItems:"center"}}>
              <span className="products-section-item-image"><img src="" alt="" /></span>
              <span className="products-section-item-name">jambu</span>
              <span className="products-section-item-category">moses</span>
              <span className="products-section-item-slug">admin</span>
              <span className="products-section-item-description">jumbogift32@gmail.com</span>
              <span className="products-section-item-price" style={{paddingLeft:"20px"}}>500</span>
              <span className="products-section-item-buttons">
              <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eye"></i> </button>
                    <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
              </span>
            </div>

            <div className="products-section-item products-section-item-main" style={{alignItems:"center"}}>
              <span className="products-section-item-image"><img src="" alt="" /></span>
              <span className="products-section-item-name">jambu</span>
              <span className="products-section-item-category">moses</span>
              <span className="products-section-item-slug">admin</span>
              <span className="products-section-item-description">jumbogift32@gmail.com</span>
              <span className="products-section-item-price" style={{paddingLeft:"20px"}}>500</span>
              <span className="products-section-item-buttons">
              <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eye"></i> </button>
                    <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
              </span>
            </div>

            <div className="products-section-item products-section-item-main" style={{alignItems:"center"}}>
              <span className="products-section-item-image"><img src="" alt="" /></span>
              <span className="products-section-item-name">jambu</span>
              <span className="products-section-item-category">moses</span>
              <span className="products-section-item-slug">admin</span>
              <span className="products-section-item-description">jumbogift32@gmail.com</span>
              <span className="products-section-item-price" style={{paddingLeft:"20px"}}>500</span>
              <span className="products-section-item-buttons">
              <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eye"></i> </button>
                    <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
              </span>
            </div>

            <div className="products-section-item products-section-item-main" style={{alignItems:"center"}}>
              <span className="products-section-item-image"><img src="" alt="" /></span>
              <span className="products-section-item-name">jambu</span>
              <span className="products-section-item-category">moses</span>
              <span className="products-section-item-slug">admin</span>
              <span className="products-section-item-description">jumbogift32@gmail.com</span>
              <span className="products-section-item-price" style={{paddingLeft:"20px"}}>500</span>
              <span className="products-section-item-buttons">
              <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eye"></i> </button>
                    <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
              </span>
            </div>
          </section>

        <DashFooter/>
      </section>
    </>
  );
}
