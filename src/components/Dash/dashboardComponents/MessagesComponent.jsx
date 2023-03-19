import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { constantActions } from "../../../store/constantSlice";
import DashFooter from "./DashFooter";

export default function MessagesComponent() {
  
    const dispatch = useDispatch();
  const companyName = useSelector((state) => state.merchant.CompanyTitle);

  // page titles
  dispatch(
    constantActions.updatePageTitles(companyName + " . " + "Messages")
  );
  dispatch(constantActions.setCurrentPage("DashMessages"));

  const DashMessages = useSelector((state) => state.messages.messages);


  return(
    <section className="ProductComponent-section">
        <div className="ProductComponent-head">
        <h2>Message</h2>
        <div className="ProductComponent-filter">
            <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-add"></i> new message</button>
            <span className="ProductComponent-filter-search">
            <input type="search" placeholder="Search For Message" name="" id="" />
            <span><i className="fa fa-search"></i></span>
            </span>
        </div>
        </div>

        <hr />
        <section className="products-section">
            <div className="products-section-item">
            <span>first Name</span>
            <span>Last Name</span>
            <span>email</span>
            <span>subject</span>
            <span>message</span>
            <span>
    {/*               <button>edit</button>
                <button>delete</button> */}
            </span>
            </div>

            {
                DashMessages.map(function(items){
                    return(
                        <div className="products-section-item products-section-item-main" style={{alignItems:"center"}}>
                            <span className="products-section-item-image" style={{fontWeight:"400",display:"flex",flexDirection:"column",justifyContent:"center",color:"grey"}}>{items.firstname}</span>
                            <span className="products-section-item-name">{items.lastname}</span>
                            <span className="products-section-item-category" style={{textTransform:"initial"}}>{items.email}</span>
                            <span className="products-section-item-slug">{items.subject}</span>
                            <span className="products-section-item-description">{items.message}</span>
                            <span className="products-section-item-buttons">
                                <button className="edit" type="button"><i style={{marginRight:"5px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> </button>
                                <button className="delete" style={{backgroundColor:"lightgreen"}} type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-upload"></i> </button>
                                <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-trash"></i> </button>
                            </span>
                        </div>
                    )
                })
            }


        </section>
        <DashFooter/>
    </section>
  );
}
