import React from 'react'
import "../css/MerchantComponent.css"
import image from "../../../components/img/member_remove.png";
import { useDispatch, useSelector } from 'react-redux';
import { constantActions } from '../../../store/constantSlice';
import DashFooter from './DashFooter';


export default function MerchantsComponent() {

  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.merchant.CompanyTitle)

  // page titles
  dispatch(constantActions.updatePageTitles(companyName+" . "+"Merchant"));
  dispatch(constantActions.setCurrentPage("DashMerchant"));

  const merchantData = useSelector(state=>state.merchant)

  return (
    <>
      <section className="MerchantComponent-section">
        <h2>Merchant</h2>

        <section>
          <span className="type1">
            <h5>merchant title</h5>
            <div>
              <input value={merchantData.CompanyTitle} type="text" placeholder="Title" name="merchant" />
              <span>
                <div className="input-status">
                  <i className="fa fa-circle-check" style={{color: "green"}}></i>
                </div>

                <div>
                  <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="update" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-nib"></i> update</button>
                </div>
              </span>
            </div>
          </span>

          <span className="type1">
            <h5>merchant description</h5>
            <div>
              <textarea value={merchantData.CompanyDescription} name="description" placeholder="Type Notes" id="" cols="30" rows="10"></textarea>
              <span>
              <div className="input-status">
                  <i className="fa fa-circle-check" style={{display: "none"}}></i>
                </div>

                <div>
                <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="update" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-nib"></i> update</button>
                </div>
              </span>
            </div>
          </span>

          <span className="type1">
            <h5>merchant Foot note</h5>
            <div>
            <textarea value={merchantData.footerCompanyTitle} name="description" placeholder="Type Notes" id="" cols="30" rows="10"></textarea>
              <span>
              <div className="input-status">
                  <i className="fa fa-circle-check" style={{display: "none"}}></i>
                </div>

                <div>
                <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="update" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-nib"></i> update</button>
                </div>
              </span>
            </div>
          </span>

          <span className="type1">
            <h5>vission</h5>
            <div>
            <textarea value={merchantData.aboutus.vision} name="description" placeholder="Type Notes" id="" cols="30" rows="10"></textarea>
              <span>
              <div className="input-status">
                  <i className="fa fa-circle-check" style={{display: "none"}}></i>
                </div>

                <div>
                <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="update" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-nib"></i> update</button>
                </div>
              </span>
            </div>
          </span>


          <span className="type1">
            <h5>mission</h5>
            <div>
            <textarea value={merchantData.aboutus.mission} name="description" placeholder="Type Notes" id="" cols="30" rows="10"></textarea>
              <span>
              <div className="input-status">
                  <i className="fa fa-circle-check" style={{display: "none"}}></i>
                </div>

                <div>
                <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="update" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-nib"></i> update</button>
                </div>
              </span>
            </div>
          </span>


          <span className="type1">
            <h5>map location</h5>
            <div>
              <input value={merchantData.contactUsPage.mapLocation} type="text" placeholder="Enter URL" name="merchant" />
              <span>
                <div className="input-status">
                  <i className="fa fa-circle-check" style={{display:"none"}}></i>
                </div>

                <div>
                <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="update" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-nib"></i> update</button>
                </div>
              </span>
            </div>
          </span>


        {/* logos */}
        <div className="logos-section">
          <h5>logos</h5>
          <div className="logos-section-container">
            <div className="logos-section-item">
              <h5>navigation logo</h5>
              <span>drag and drop</span>
              <button type="button">upload</button>
            </div>

            <div className="logos-section-item">
            <h5>Browser logo</h5>
              <span>drag and drop</span>
              <button type="button">upload</button>
            </div>

            <div className="logos-section-item">
            <h5>footer logo</h5>
              <span>drag and drop</span>
              <button type="button">upload</button>
            </div>
          </div>
        </div>


        {/* gallery */}
        <div className="gallery-section">
          <h5>gallery</h5>
          <div className="gallery-section-container">
            <div className="galar">
              <span className="image-thmub"><img src="" alt="" /></span>
              <span className="image-thmub"><img src="" alt="" /></span>
              <span className="image-thmub"><img src="" alt="" /></span>
            </div>

            <div className="gallery-upload">
              <div className="dropimage">drag and drop</div>
              <div className="gallery-upload-buttons">
                <button type="button">upload</button>
                <button type="button">browse image</button>
              </div>
            </div>
          </div>
        </div>




          {/* about notes */}
          <div className="type-notes">
            <div className="type-notes-titles">
              <span className="type-notes-heading">about notes</span>
              <button type="button"><i className="fa fa-add" style={{color:"white", fontSize:"13px"}}></i> add note</button>
            </div>

            <div className="type-notes-container">

              {
                merchantData.aboutus.notes.map(function(item){
                  return(
                    <span className="note-item" key={item._id}>
                      <span className="note-item-notes">{item.note}</span>
                      <div className="note-item-buttons">
                        <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                        <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eraser"></i> delete</button>
                      </div>
                    </span>
                  )
                })
              }

            </div>
          </div>



          {/* contact information */}
          <div className="contactInformation">
            <h5>contact information</h5>

            <section className="contactInformation-container">
            <div className="contactInformation-item">
              <span className="contactInformation-item-title"><i className="fa fa-location-dot"></i> address</span>
              <span className="contactInformation-item-detail">
                <input value={merchantData.Contact.location.address} type="text" name="" id="" placeholder="Title" />
                <input value={merchantData.Contact.location.link} type="text" name="" id="" placeholder="Link"/>
                <input value={merchantData.Contact.location.fontawesome_icon} type="text" name="" id="" placeholder="Fontawesome icon"/>
                <button className="save" type="button"><i className="fa fa-floppy-disk"></i> save</button>
              </span>
            </div>

            <div className="contactInformation-item">
              <span className="contactInformation-item-title"><i className="fa fa-phone"></i> phone</span>
              <span className="contactInformation-item-detail">
                <input value={merchantData.Contact.phone.type} type="text" name="" id="" placeholder="Title" />
                <input value={merchantData.Contact.phone.link} type="text" name="" id="" placeholder="Link"/>
                <input value={merchantData.Contact.phone.fontawesome_icon} type="text" name="" id="" placeholder="Fontawesome icon"/>
                <button className="save" type="button"><i className="fa fa-floppy-disk"></i> save</button>
              </span>
            </div>

            <div className="contactInformation-item">
              <span className="contactInformation-item-title"><i className="fa fa-envelope"></i> mail</span>
              <span className="contactInformation-item-detail">
                <input value={merchantData.Contact.email.type} type="text" name="" id="" placeholder="Title" />
                <input value={merchantData.Contact.email.link} type="text" name="" id="" placeholder="Link"/>
                <input value={merchantData.Contact.email.fontawesome_icon} type="text" name="" id="" placeholder="Fontawesome icon"/>
                <button className="save" type="button"><i className="fa fa-floppy-disk"></i> save</button>
              </span>
            </div>
            </section>
          </div>


          {/* socials */}
          <div className="socials-section">
            <div className="socials-section-titles">
              <span className="socials-section-heading">{merchantData.socials.heading}</span>
              <button type="button"><i className="fa fa-add" style={{color:"white", fontSize:"13px"}}></i> add social</button>
            </div>

            <section className="socials-section-socialsContainer">

              {
                merchantData.socials.social.map(function(item){
                  return(
                    <div className="socials-section-socials-item" key={item.id}>
                      <span className="socials-section-socials-item-icon"><i className={item.fontawesome_icon} style={{color:"black",fontSize:"20px", paddingRight:"10px"}}></i> {item.fontawesome_icon} </span>
                      <span className="socials-section-socials-item-title">
                        {item.title}
                      </span>
                      <span className="socials-section-socials-item-link">{item.link}</span>
                        
                      <div className="socials-section-socials-item-buttons">
                        <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                        <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eraser"></i> delete</button>
                      </div>
                    </div>
                  )
                })
              }

            </section>
          </div>


          {/* members */}
          <div className="membership-section">
            <div className="membership-section-titles">
              <span className="membership-section-heading">{merchantData.aboutus.membership.board.title} <i style={{fontSize:"13px", marginTop: "5px", marginLeft: "10px"}} className="fa fa-pen"></i></span>
              <button type="button"><i className="fa fa-add" style={{color:"white", fontSize:"13px"}}></i> add</button>
            </div>

            <div className="socials-section-socialsContainer">

              {
                merchantData.aboutus.membership.board.members.map(function(item){
                  return(
                    <div className="socials-section-socials-item" key={item.id}>
                      <span className="socials-section-socials-item-image">
                        <img src={item.image} alt="" />
                      </span>
                      <span className="socials-section-socials-item-title">
                      {item.name}
                      </span>
                      <span className="socials-section-socials-item-link">{item.role}</span>
                        
                      <div className="socials-section-socials-item-buttons">
                        <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                        <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eraser"></i> delete</button>
                      </div>
                    </div>
                  )
                })
              }





            </div>
          </div>





          {/* management team member */}
         {/* members */}
         <div className="membership-section">
            <div className="membership-section-titles">
              <span className="membership-section-heading">{merchantData.aboutus.membership.managementTeam.title} <i style={{fontSize:"13px", marginTop: "5px", marginLeft: "10px"}} className="fa fa-pen"></i></span>
              <button type="button"><i className="fa fa-add" style={{color:"white", fontSize:"13px"}}></i> add</button>
            </div>

            <div className="socials-section-socialsContainer">
              
              {
                merchantData.aboutus.membership.managementTeam.members.map(function(item){
                  return(
                    <div className="socials-section-socials-item" key={item.id}>
                      <span className="socials-section-socials-item-image">
                        <img src={item.image} alt="" />
                      </span>
                      <span className="socials-section-socials-item-title">
                      {item.name}
                      </span>
                      <span className="socials-section-socials-item-link">{item.role}</span>
                        
                      <div className="socials-section-socials-item-buttons">
                        <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                        <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eraser"></i> delete</button>
                      </div>
                    </div>
                  )
                })
              }
              
            </div>
          </div>



          {/* logos */}
        </section>


        <DashFooter/>
      </section>
    </>
  )
}
