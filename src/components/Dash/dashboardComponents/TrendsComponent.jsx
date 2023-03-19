import React from "react";
import "../css/TrendsComponent.css";
import { constantActions } from '../../../store/constantSlice';
import { useDispatch, useSelector } from "react-redux";

export default function TrendsComponent() {

  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.merchant.CompanyTitle)

  // page titles
  dispatch(constantActions.updatePageTitles(companyName+" . "+"Trends"));
  dispatch(constantActions.setCurrentPage("Dashboard"));

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

          <div className="products-section-item products-section-item-main">
            <span className="products-section-item-image"><img src="" alt="" /></span>
            <span className="products-section-item-name">Servittes Sever</span>
            <span className="products-section-item-category">servittes</span>
            <span className="products-section-item-slug"> 50 orders</span>
            <span className="products-section-item-description">Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity</span>
            <span className="products-section-item-price">$ 500</span>
{/*             <span className="products-section-item-buttons">
            <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> </button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
            </span> */}
          </div>

          <div className="products-section-item products-section-item-main">
            <span className="products-section-item-image"><img src="" alt="" /></span>
            <span className="products-section-item-name">Servittes Sever</span>
            <span className="products-section-item-category">servittes</span>
            <span className="products-section-item-slug">45 orders</span>
            <span className="products-section-item-description">Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity</span>
            <span className="products-section-item-price">$ 500</span>
{/*             <span className="products-section-item-buttons">
            <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> </button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
            </span> */}
          </div>

          <div className="products-section-item products-section-item-main">
            <span className="products-section-item-image"><img src="" alt="" /></span>
            <span className="products-section-item-name">Servittes Sever</span>
            <span className="products-section-item-category">servittes</span>
            <span className="products-section-item-slug">20 orders</span>
            <span className="products-section-item-description">Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity</span>
            <span className="products-section-item-price">$ 500</span>
{/*             <span className="products-section-item-buttons">
            <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> </button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
            </span> */}
          </div>

          <div className="products-section-item products-section-item-main">
            <span className="products-section-item-image"><img src="" alt="" /></span>
            <span className="products-section-item-name">Servittes Sever</span>
            <span className="products-section-item-category">servittes</span>
            <span className="products-section-item-slug">20 orders</span>
            <span className="products-section-item-description">Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity</span>
            <span className="products-section-item-price">$ 500</span>
{/*             <span className="products-section-item-buttons">
            <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> </button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
            </span> */}
          </div>

          <div className="products-section-item products-section-item-main">
            <span className="products-section-item-image"><img src="" alt="" /></span>
            <span className="products-section-item-name">Servittes Sever</span>
            <span className="products-section-item-category">servittes</span>
            <span className="products-section-item-slug">20 orders</span>
            <span className="products-section-item-description">Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity</span>
            <span className="products-section-item-price">$ 500</span>
{/*             <span className="products-section-item-buttons">
            <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> </button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
            </span> */}
          </div>

          <div className="products-section-item products-section-item-main">
            <span className="products-section-item-image"><img src="" alt="" /></span>
            <span className="products-section-item-name">Servittes Sever</span>
            <span className="products-section-item-category">servittes</span>
            <span className="products-section-item-slug">20 orders</span>
            <span className="products-section-item-description">Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity</span>
            <span className="products-section-item-price">$ 500</span>
{/*             <span className="products-section-item-buttons">
            <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> </button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
            </span> */}
          </div>

          <div className="products-section-item products-section-item-main">
            <span className="products-section-item-image"><img src="" alt="" /></span>
            <span className="products-section-item-name">Servittes Sever</span>
            <span className="products-section-item-category">servittes</span>
            <span className="products-section-item-slug">20 orders</span>
            <span className="products-section-item-description">Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity</span>
            <span className="products-section-item-price">$ 500</span>
{/*             <span className="products-section-item-buttons">
            <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> </button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
            </span> */}
          </div>
        </section>
      </section>
    </>
  );
}
