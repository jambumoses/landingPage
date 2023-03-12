import React from "react";
import "../css/CategoriesComponent.css"

export default function CategoriesComponent() {
  return (
    <>
      <section className="CategoriesComponent-section">
      <div className="ProductComponent-head">
        <h2>categories</h2>
        <div className="ProductComponent-filter">
          <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-add"></i> add category</button>
          <span className="ProductComponent-filter-search">
            <input type="search" placeholder="Search For category" name="" id="" />
            <span><i className="fa fa-search"></i></span>
          </span>
        </div>
      </div>

        <hr />
        <section className="products-section">
          <div className="products-section-item">
            <span>image</span>
            <span>category</span>
            <span>type</span>
            <span>slug</span>
            <span>decription</span>
            <span>
{/*               <button>edit</button>
              <button>delete</button> */}
            </span>
          </div>

          <div className="products-section-item products-section-item-main">
            <span className="products-section-item-image"><img src="" alt="" /></span>
            <span className="products-section-item-name">Servittes Sever</span>
            <span className="products-section-item-category">todayAd</span>
            <span className="products-section-item-slug">servittes</span>
            <span className="products-section-item-description">Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity</span>
            
            <span className="products-section-item-buttons">
            <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> </button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
            </span>
          </div>

          <div className="products-section-item products-section-item-main">
            <span className="products-section-item-image"><img src="" alt="" /></span>
            <span className="products-section-item-name">Servittes Sever</span>
            <span className="products-section-item-category">servittes</span>
            <span className="products-section-item-slug">servittes</span>
            <span className="products-section-item-description">Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity</span>
            
            <span className="products-section-item-buttons">
            <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> </button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
            </span>
          </div>

          <div className="products-section-item products-section-item-main">
            <span className="products-section-item-image"><img src="" alt="" /></span>
            <span className="products-section-item-name">Servittes Sever</span>
            <span className="products-section-item-category">servittes</span>
            <span className="products-section-item-slug">servittes</span>
            <span className="products-section-item-description">Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity</span>
            
            <span className="products-section-item-buttons">
            <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> </button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
            </span>
          </div>

          <div className="products-section-item products-section-item-main">
            <span className="products-section-item-image"><img src="" alt="" /></span>
            <span className="products-section-item-name">Servittes Sever</span>
            <span className="products-section-item-category">servittes</span>
            <span className="products-section-item-slug">servittes</span>
            <span className="products-section-item-description">Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity</span>
            
            <span className="products-section-item-buttons">
            <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> </button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
            </span>
          </div>

          <div className="products-section-item products-section-item-main">
            <span className="products-section-item-image"><img src="" alt="" /></span>
            <span className="products-section-item-name">Servittes Sever</span>
            <span className="products-section-item-category">servittes</span>
            <span className="products-section-item-slug">servittes</span>
            <span className="products-section-item-description">Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity</span>
            
            <span className="products-section-item-buttons">
            <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> </button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
            </span>
          </div>

          <div className="products-section-item products-section-item-main">
            <span className="products-section-item-image"><img src="" alt="" /></span>
            <span className="products-section-item-name">Servittes Sever</span>
            <span className="products-section-item-category">servittes</span>
            <span className="products-section-item-slug">servittes</span>
            <span className="products-section-item-description">Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity</span>
            
            <span className="products-section-item-buttons">
            <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> </button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
            </span>
          </div>

          <div className="products-section-item products-section-item-main">
            <span className="products-section-item-image"><img src="" alt="" /></span>
            <span className="products-section-item-name">Servittes Sever</span>
            <span className="products-section-item-category">servittes</span>
            <span className="products-section-item-slug">servittes</span>
            <span className="products-section-item-description">Plastics Are A Wide Range Of Synthetic Or Semi-Synthetic . Their Plasticity</span>
            
            <span className="products-section-item-buttons">
            <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> </button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
            </span>
          </div>
        </section>
      </section>
    </>
  );
}
