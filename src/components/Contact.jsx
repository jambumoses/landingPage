import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { constantActions } from '../store/constantSlice';

export default function Contact() {

  const dispatch = useDispatch();

  dispatch(constantActions.updatePageTitles("Cantact Us"));
  dispatch(constantActions.setCurrentPage("contact"));

  const constantInfo = useSelector(state=>state.constant.data)

  return (
    <>
    <section className='contact_section'>
      <div className='map_wrapper'>
        <span className='map_wrapper_heading'>{constantInfo.contactUsPage.BannerHeading}</span>
        <span className='map_wrapper_note'>{constantInfo.contactUsPage.BannerDescription}</span>
      </div>

      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe id="gmap_canvas" src={constantInfo.contactUsPage.mapLocation} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
          </iframe>
        </div>
      </div>

      <div className='scrolldown'>
        <a href='#bottom'><i className="fa fa-angle-down"></i></a>
      </div>
    </section>

    <section className='getintouch_section' id='bottom'>
      <section className='getintouch_section_left'>
        <div className='getintouch_section_left_cont'>
          <i className={constantInfo.Contact.location.fontawesome_icon}></i> <span> {constantInfo.Contact.location.address}</span>
        </div>

        <div className='getintouch_section_left_cont'>
          <i className={constantInfo.Contact.phone.fontawesome_icon}></i> <span>{constantInfo.Contact.phone.title}</span>
        </div>

        <div className='getintouch_section_left_cont'>
          <i className={constantInfo.Contact.email.fontawesome_icon}></i> <span>{constantInfo.Contact.email.mail}</span>
        </div>

        <div className='getintouch_section_left_socials'>
          <h3>{constantInfo.socials.heading}</h3>
          <span>
            {constantInfo.socials.social.map(function(item){
              return(
                <a href={item.link}><i className={item.fontawesome_icon}></i></a>
              )
            })}
          </span>
        </div>
      </section>
      
      <section className='getintouch_section_right'>
        <h3>{constantInfo.contactUsPage.contactFormTitle}</h3>
        <span className='getintouch_section_right_note'>
          <span>{constantInfo.contactUsPage.contactFormDescription}</span>
        </span>
        <form action="" method="post">
          <div className='getintouch_name_phone'>
            <span className='getintouch_name_phone_input'> <i className="fa fa-user"></i><input type="text" name="name" placeholder='Your Name' /></span>
            <span className='getintouch_name_phone_input'> <i className="fa fa-phone"></i><input type="text" name="phone" placeholder='Your Phone Number' /></span>
          </div>
          <span className='getintouch_email'><i className="fa fa-envelope"></i><input type="email" name="email" id="" placeholder='Enter Your Email Here'/></span>
          <textarea className='getintouch_message' name="message" id="" cols="30" rows="10" placeholder='Enter Your FeedBack Here'></textarea>
          <div className='getintouch_btn'>
            <button type="submit">submit</button>
          </div> 
        </form>
      </section>
    </section>

    <section>
      <div className="mapouter_show">
          <div className="gmap_canvas_show">
            <iframe id="gmap_canvas" src={constantInfo.contactUsPage.mapLocation} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe>
          </div>
      </div>
    </section>
    </>
  )
}
