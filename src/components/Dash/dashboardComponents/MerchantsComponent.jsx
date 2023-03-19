import React from 'react'
import "../css/MerchantComponent.css"
import image from "../../../components/img/member_remove.png";
import { useDispatch, useSelector } from 'react-redux';
import { constantActions } from '../../../store/constantSlice';


export default function MerchantsComponent() {

  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.merchant.CompanyTitle)

  // page titles
  dispatch(constantActions.updatePageTitles(companyName+" . "+"Merchant"));
  dispatch(constantActions.setCurrentPage("Dashboard"));

  return (
    <>
      <section className="MerchantComponent-section">
        <h2>Merchant</h2>

        <section>
          <span className="type1">
            <h5>merchant title</h5>
            <div>
              <input type="text" placeholder="Title" name="merchant" />
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
              <textarea name="description" placeholder="Type Notes" id="" cols="30" rows="10"></textarea>
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
            <textarea name="description" placeholder="Type Notes" id="" cols="30" rows="10"></textarea>
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
            <textarea name="description" placeholder="Type Notes" id="" cols="30" rows="10"></textarea>
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
            <textarea name="description" placeholder="Type Notes" id="" cols="30" rows="10"></textarea>
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
              <input type="text" placeholder="Enter URL" name="merchant" />
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
              <span className="note-item">
                <span className="note-item-notes">We Are Hiring! Font Awesome is hiring a product designer to help us take Shoelace to the next level.</span>
                <div className="note-item-buttons">
                  <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eraser"></i> delete</button>
                </div>
              </span>

              <span className="note-item">
                <span className="note-item-notes">We Are Hiring! Font Awesome is hiring a product designer to help us take Shoelace to the next level.</span>
                <div className="note-item-buttons">
                  <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eraser"></i> delete</button>
                </div>
              </span>

              <span className="note-item">
                <span className="note-item-notes">We Are Hiring! Font Awesome is hiring a product designer to help us take Shoelace to the next level.</span>
                <div className="note-item-buttons">
                  <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eraser"></i> delete</button>
                </div>
              </span>

              <span className="note-item">
                <span className="note-item-notes">We Are Hiring! Font Awesome is hiring a product designer to help us take Shoelace to the next level.</span>
                <div className="note-item-buttons">
                  <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eraser"></i> delete</button>
                </div>
              </span>

              <span className="note-item">
                <span className="note-item-notes">We Are Hiring! Font Awesome is hiring a product designer to help us take Shoelace to the next level.</span>
                <div className="note-item-buttons">
                  <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eraser"></i> delete</button>
                </div>
              </span>

              <span className="note-item">
                <span className="note-item-notes">We Are Hiring! Font Awesome is hiring a product designer to help us take Shoelace to the next level.</span>
                <div className="note-item-buttons">
                  <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eraser"></i> delete</button>
                </div>
              </span>
            </div>
          </div>



          {/* contact information */}
          <div className="contactInformation">
            <h5>contact information</h5>

            <section className="contactInformation-container">
            <div className="contactInformation-item">
              <span className="contactInformation-item-title"><i className="fa fa-location-dot"></i> address</span>
              <span className="contactInformation-item-detail">
                <input type="text" name="" id="" placeholder="Title" />
                <input type="text" name="" id="" placeholder="Link"/>
                <input type="text" name="" id="" placeholder="Fontawesome icon"/>
                <button className="save" type="button"><i className="fa fa-floppy-disk"></i> save</button>
              </span>
            </div>

            <div className="contactInformation-item">
              <span className="contactInformation-item-title"><i className="fa fa-phone"></i> phone</span>
              <span className="contactInformation-item-detail">
                <input type="text" name="" id="" placeholder="Title" />
                <input type="text" name="" id="" placeholder="Link"/>
                <input type="text" name="" id="" placeholder="Fontawesome icon"/>
                <button className="save" type="button"><i className="fa fa-floppy-disk"></i> save</button>
              </span>
            </div>

            <div className="contactInformation-item">
              <span className="contactInformation-item-title"><i className="fa fa-envelope"></i> mail</span>
              <span className="contactInformation-item-detail">
                <input type="text" name="" id="" placeholder="Title" />
                <input type="text" name="" id="" placeholder="Link"/>
                <input type="text" name="" id="" placeholder="Fontawesome icon"/>
                <button className="save" type="button"><i className="fa fa-floppy-disk"></i> save</button>
              </span>
            </div>
            </section>
          </div>


          {/* socials */}
          <div className="socials-section">
            <div className="socials-section-titles">
              <span className="socials-section-heading">socials</span>
              <button type="button"><i className="fa fa-add" style={{color:"white", fontSize:"13px"}}></i> add social</button>
            </div>

            <section className="socials-section-socialsContainer">
              <div className="socials-section-socials-item">
                <span className="socials-section-socials-item-icon">fa fa-facebook</span>
                <span className="socials-section-socials-item-title">
                  sacco shield
                </span>
                <span className="socials-section-socials-item-link">http://localhost/www/sacco_shield-main/sacco_shield/index.php?page=borrowers</span>
                  
                <div className="socials-section-socials-item-buttons">
                  <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eraser"></i> delete</button>
                </div>
              </div>

              <div className="socials-section-socials-item">
                <span className="socials-section-socials-item-icon">fa fa-facebook</span>
                <span className="socials-section-socials-item-title">
                  sacco shield
                </span>
                <span className="socials-section-socials-item-link">http://localhost/www/sacco_shield-main/sacco_shield/index.php?page=borrowers</span>
                  
                <div className="socials-section-socials-item-buttons">
                  <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eraser"></i> delete</button>
                </div>
              </div>

              <div className="socials-section-socials-item">
                <span className="socials-section-socials-item-icon">fa fa-facebook</span>
                <span className="socials-section-socials-item-title">
                  sacco shield
                </span>
                <span className="socials-section-socials-item-link">http://localhost/www/sacco_shield-main/sacco_shield/index.php?page=borrowers</span>
                  
                <div className="socials-section-socials-item-buttons">
                  <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eraser"></i> delete</button>
                </div>
              </div>

              <div className="socials-section-socials-item">
                <span className="socials-section-socials-item-icon">fa fa-facebook</span>
                <span className="socials-section-socials-item-title">
                  sacco shield
                </span>
                <span className="socials-section-socials-item-link">http://localhost/www/sacco_shield-main/sacco_shield/index.php?page=borrowers</span>
                  
                <div className="socials-section-socials-item-buttons">
                  <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eraser"></i> delete</button>
                </div>
              </div>
            </section>
          </div>


          {/* members */}
          <div className="membership-section">
            <div className="membership-section-titles">
              <span className="membership-section-heading">Governance Board <i style={{fontSize:"13px", marginTop: "5px", marginLeft: "10px"}} className="fa fa-pen"></i></span>
              <button type="button"><i className="fa fa-add" style={{color:"white", fontSize:"13px"}}></i> add</button>
            </div>

            <div className="socials-section-socialsContainer">

              <div className="socials-section-socials-item">
                <span className="socials-section-socials-item-image">
                  <img src={image} alt="" />
                </span>
                <span className="socials-section-socials-item-title">
                jambu moses
                </span>
                <span className="socials-section-socials-item-link">CEO Acardia Shopping Mall, Senior</span>
                  
                <div className="socials-section-socials-item-buttons">
                  <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eraser"></i> delete</button>
                </div>
              </div>

              <div className="socials-section-socials-item">
                <span className="socials-section-socials-item-image">
                  <img src={image} alt="" />
                </span>
                <span className="socials-section-socials-item-title">
                jambu moses
                </span>
                <span className="socials-section-socials-item-link">CEO Acardia Shopping Mall, Senior</span>
                  
                <div className="socials-section-socials-item-buttons">
                  <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eraser"></i> delete</button>
                </div>
              </div>

              <div className="socials-section-socials-item">
                <span className="socials-section-socials-item-image">
                  <img src={image} alt="" />
                </span>
                <span className="socials-section-socials-item-title">
                jambu moses
                </span>
                <span className="socials-section-socials-item-link">CEO Acardia Shopping Mall, Senior</span>
                  
                <div className="socials-section-socials-item-buttons">
                  <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eraser"></i> delete</button>
                </div>
              </div>

              <div className="socials-section-socials-item">
                <span className="socials-section-socials-item-image">
                  <img src={image} alt="" />
                </span>
                <span className="socials-section-socials-item-title">
                jambu moses
                </span>
                <span className="socials-section-socials-item-link">CEO Acardia Shopping Mall, Senior</span>
                  
                <div className="socials-section-socials-item-buttons">
                  <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eraser"></i> delete</button>
                </div>
              </div>

            </div>
          </div>





          {/* management team member */}
         {/* members */}
         <div className="membership-section">
            <div className="membership-section-titles">
              <span className="membership-section-heading">Management Team Board <i style={{fontSize:"13px", marginTop: "5px", marginLeft: "10px"}} className="fa fa-pen"></i></span>
              <button type="button"><i className="fa fa-add" style={{color:"white", fontSize:"13px"}}></i> add</button>
            </div>

            <div className="socials-section-socialsContainer">

              <div className="socials-section-socials-item">
                <span className="socials-section-socials-item-image">
                  <img src={image} alt="" />
                </span>
                <span className="socials-section-socials-item-title">
                jambu moses
                </span>
                <span className="socials-section-socials-item-link">CEO Acardia Shopping Mall, Senior</span>
                  
                <div className="socials-section-socials-item-buttons">
                  <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eraser"></i> delete</button>
                </div>
              </div>

              <div className="socials-section-socials-item">
                <span className="socials-section-socials-item-image">
                  <img src={image} alt="" />
                </span>
                <span className="socials-section-socials-item-title">
                jambu moses
                </span>
                <span className="socials-section-socials-item-link">CEO Acardia Shopping Mall, Senior</span>
                  
                <div className="socials-section-socials-item-buttons">
                  <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eraser"></i> delete</button>
                </div>
              </div>

              <div className="socials-section-socials-item">
                <span className="socials-section-socials-item-image">
                  <img src={image} alt="" />
                </span>
                <span className="socials-section-socials-item-title">
                jambu moses
                </span>
                <span className="socials-section-socials-item-link">CEO Acardia Shopping Mall, Senior</span>
                  
                <div className="socials-section-socials-item-buttons">
                  <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eraser"></i> delete</button>
                </div>
              </div>

              <div className="socials-section-socials-item">
                <span className="socials-section-socials-item-image">
                  <img src={image} alt="" />
                </span>
                <span className="socials-section-socials-item-title">
                jambu moses
                </span>
                <span className="socials-section-socials-item-link">CEO Acardia Shopping Mall, Senior</span>
                  
                <div className="socials-section-socials-item-buttons">
                  <button className="edit" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-pen-to-square"></i> edit</button>
                  <button className="delete" type="button"><i style={{marginRight:"10px",fontSize:"13px", color:"white"}} className="fa fa-eraser"></i> delete</button>
                </div>
              </div>
              
            </div>
          </div>



          {/* logos */}

        </section>
      </section>
    </>
  )
}
