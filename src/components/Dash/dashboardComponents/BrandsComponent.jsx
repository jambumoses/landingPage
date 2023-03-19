import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/BrandsComponent.css"
import { constantActions } from '../../../store/constantSlice';

export default function BrandsComponent() {

  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.merchant.CompanyTitle)

  // page titles
  dispatch(constantActions.updatePageTitles(companyName+" . "+"Brands"));
  dispatch(constantActions.setCurrentPage("Dashboard"));

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
            <div className="BrandsDash-item">
              <span className="BrandsDash-item-count">03</span>
              <span className="BrandsDash-item-thumbnail">
                <img src="" alt="" />
              </span>
              <span className="BrandsDash-item-title">Jambu Moses</span>
              <span className="BrandsDash-item-description">
                Brands the we work with for the delivery and great product
                demand and suplies to fuel up the system.
              </span>
              <span className="BrandsDash-item-link">link</span>
              <span className="BrandsDash-item-buttons">
              <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> update</button>
              </span>
            </div>

            <div className="BrandsDash-item">
              <span className="BrandsDash-item-count">03</span>
              <span className="BrandsDash-item-thumbnail">
                <img src="" alt="" />
              </span>
              <span className="BrandsDash-item-title">Jambu Moses</span>
              <span className="BrandsDash-item-description">
                Brands the we work with for the delivery and great product
                demand and suplies to fuel up the system.
              </span>
              <span className="BrandsDash-item-link">link</span>
              <span className="BrandsDash-item-buttons">
              <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> update</button>
              </span>
            </div>

            <div className="BrandsDash-item">
              <span className="BrandsDash-item-count">03</span>
              <span className="BrandsDash-item-thumbnail">
                <img src="" alt="" />
              </span>
              <span className="BrandsDash-item-title">Jambu Moses</span>
              <span className="BrandsDash-item-description">
                Brands the we work with for the delivery and great product
                demand and suplies to fuel up the system.
              </span>
              <span className="BrandsDash-item-link">link</span>
              <span className="BrandsDash-item-buttons">
              <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> update</button>
              </span>
            </div>

            <div className="BrandsDash-item">
              <span className="BrandsDash-item-count">03</span>
              <span className="BrandsDash-item-thumbnail">
                <img src="" alt="" />
              </span>
              <span className="BrandsDash-item-title">Jambu Moses</span>
              <span className="BrandsDash-item-description">
                Brands the we work with for the delivery and great product
                demand and suplies to fuel up the system.
              </span>
              <span className="BrandsDash-item-link">link</span>
              <span className="BrandsDash-item-buttons">
              <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> update</button>
              </span>
            </div>

            <div className="BrandsDash-item">
              <span className="BrandsDash-item-count">03</span>
              <span className="BrandsDash-item-thumbnail">
                <img src="" alt="" />
              </span>
              <span className="BrandsDash-item-title">Jambu Moses</span>
              <span className="BrandsDash-item-description">
                Brands the we work with for the delivery and great product
                demand and suplies to fuel up the system.
              </span>
              <span className="BrandsDash-item-link">link</span>
              <span className="BrandsDash-item-buttons">
              <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> update</button>
              </span>
            </div>

            <div className="BrandsDash-item">
              <span className="BrandsDash-item-count">03</span>
              <span className="BrandsDash-item-thumbnail">
                <img src="" alt="" />
              </span>
              <span className="BrandsDash-item-title">Jambu Moses</span>
              <span className="BrandsDash-item-description">
                Brands the we work with for the delivery and great product
                demand and suplies to fuel up the system.
              </span>
              <span className="BrandsDash-item-link">link</span>
              <span className="BrandsDash-item-buttons">
              <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> update</button>
              </span>
            </div>

            <div className="BrandsDash-item">
              <span className="BrandsDash-item-count">03</span>
              <span className="BrandsDash-item-thumbnail">
                <img src="" alt="" />
              </span>
              <span className="BrandsDash-item-title">Jambu Moses</span>
              <span className="BrandsDash-item-description">
                Brands the we work with for the delivery and great product
                demand and suplies to fuel up the system.
              </span>
              <span className="BrandsDash-item-link">link</span>
              <span className="BrandsDash-item-buttons">
              <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> update</button>
              </span>
            </div>

            <div className="BrandsDash-item">
              <span className="BrandsDash-item-count">03</span>
              <span className="BrandsDash-item-thumbnail">
                <img src="" alt="" />
              </span>
              <span className="BrandsDash-item-title">Jambu Moses</span>
              <span className="BrandsDash-item-description">
                Brands the we work with for the delivery and great product
                demand and suplies to fuel up the system.
              </span>
              <span className="BrandsDash-item-link">link</span>
              <span className="BrandsDash-item-buttons">
              <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> update</button>
              </span>
            </div>

            <div className="BrandsDash-item">
              <span className="BrandsDash-item-count">03</span>
              <span className="BrandsDash-item-thumbnail">
                <img src="" alt="" />
              </span>
              <span className="BrandsDash-item-title">Jambu Moses</span>
              <span className="BrandsDash-item-description">
                Brands the we work with for the delivery and great product
                demand and suplies to fuel up the system.
              </span>
              <span className="BrandsDash-item-link">link</span>
              <span className="BrandsDash-item-buttons">
              <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> update</button>
              </span>
            </div>
            
          </div>
        </section>
      </section>
    </>
  );
}
