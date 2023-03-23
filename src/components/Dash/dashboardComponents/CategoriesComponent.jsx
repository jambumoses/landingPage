import React from "react";
import $ from "jquery";
import "../css/CategoriesComponent.css";
import { constantActions } from '../../../store/constantSlice';
import { useDispatch, useSelector } from "react-redux";
import DashFooter from "./DashFooter";
import { showAdd } from "./BrandsComponent";

export default function CategoriesComponent() {

  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.merchant.CompanyTitle)

  // page titles
  dispatch(constantActions.updatePageTitles(companyName+" . "+"Categories"));
  dispatch(constantActions.setCurrentPage("DashCategories"));

  const DashCategories = useSelector(state=>state.categories.categories);

  $("#slideform").hide();

  return (
    <>
      <section className="CategoriesComponent-section">
      <div className="ProductComponent-head">
        <h2>categories</h2>
        <div className="ProductComponent-filter">
          <button onClick={showAdd} className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-add"></i> add category</button>
          <span className="ProductComponent-filter-search">
            <input type="search" placeholder="Search For category" name="" id="" />
            <span><i className="fa fa-search"></i></span>
          </span>
        </div>
      </div>

      
      <div id="slideform">
          <form action="" method="post" className="addData">
            <table border={0} cellPadding={5}>
              <tr>
                <td>count</td>
                <td><input type="text" name="" id="" /></td>
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

          {
            DashCategories.map((items)=>{
              return(
                <div className="products-section-item products-section-item-main" key={items._id} style={{alignItems:"center"}}>
                  <span className="products-section-item-image"><img src={items.images.url} alt="" /></span>
                  <span className="products-section-item-name">{items.category}</span>
                  <span className="products-section-item-category">{items.type}</span>
                  <span className="products-section-item-slug">{items.slug}</span>
                  <span className="products-section-item-description">{items.description.slice(0,100)} ...</span>
                  
                  <span className="products-section-item-buttons">
                  <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> </button>
                        <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
                  </span>
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
