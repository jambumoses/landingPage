import {React,useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { constantActions } from '../store/constantSlice';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Contact() {

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  const dispatch = useDispatch();

  dispatch(constantActions.updatePageTitles("Cantact Us"));
  dispatch(constantActions.setCurrentPage("contact"));

  const constantInfo = useSelector(state=>state.constant.data)

  return (
    <>
    <section className='contact_section'>
      <div className='map_wrapper'>
        <span data-aos="fade-up" className='map_wrapper_heading'>{constantInfo.contactUsPage.BannerHeading}</span>
        <span data-aos="fade-up" className='map_wrapper_note'>{constantInfo.contactUsPage.BannerDescription}</span>
      </div>

      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe id="gmap_canvas" src={constantInfo.contactUsPage.mapLocation} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
          </iframe>
        </div>
      </div>

      <div data-aos="fade-down" className='scrolldown'>
        <a id='scrolldown-animation' href='#bottom'><i className="fa fa-angle-down"></i></a>
      </div>
    </section>

    <section className='getintouch_section' id='bottom'>
      <section className='getintouch_section_left'>
        <div className='getintouch_section_left_cont'>
          <i data-aos="fade-down" className={constantInfo.Contact.location.fontawesome_icon}></i> 
          <span data-aos="fade-down"> {constantInfo.Contact.location.address}</span>
        </div>

        <div className='getintouch_section_left_cont'>
          <i data-aos="fade-down" className={constantInfo.Contact.phone.fontawesome_icon}></i> 
          <span data-aos="fade-down">{constantInfo.Contact.phone.title}</span>
        </div>

        <div className='getintouch_section_left_cont'>
          <i data-aos="fade-down" className={constantInfo.Contact.email.fontawesome_icon}></i> 
          <span data-aos="fade-down">{constantInfo.Contact.email.mail}</span>
        </div>

        <div className='getintouch_section_left_socials'>
          <h3 data-aos="fade-down">{constantInfo.socials.heading}</h3>
          <span data-aos="fade-left">
            {constantInfo.socials.social.map(function(item){
              return(
                <a href={item.link}><i className={item.fontawesome_icon}></i></a>
              )
            })}
          </span>
        </div>
      </section>
      
      <section className='getintouch_section_right'>
        <h3 data-aos="fade-up">{constantInfo.contactUsPage.contactFormTitle}</h3>
        <span className='getintouch_section_right_note'>
          <span data-aos="fade-up">{constantInfo.contactUsPage.contactFormDescription}</span>
        </span>
        <form data-aos="fade-up" action="" method="post">
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
          <div data-aos="fade-up" className="gmap_canvas_show">
            <iframe id="gmap_canvas" src={constantInfo.contactUsPage.mapLocation} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe>
          </div>
      </div>
    </section>
    </>
  )
}
