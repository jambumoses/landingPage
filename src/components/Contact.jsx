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
  const companyName = useSelector(state=>state.merchant.CompanyTitle)

  dispatch(constantActions.updatePageTitles(companyName+" . "+"Cantact Us"));
  dispatch(constantActions.setCurrentPage("contact"));

  const merchantData = useSelector(state=>state.merchant)
  const contactBannerInfo = useSelector(state=>state.banner.contactBanner)

  return (
    <>
    <section className='contact_section'>
      <div className='map_wrapper'>
        <span data-aos="fade-up" className='map_wrapper_heading' style={{color: contactBannerInfo.title.color}}>{contactBannerInfo.title.content}</span>
        <span data-aos="fade-up" className='map_wrapper_note' style={{color: contactBannerInfo.description.color}}>{contactBannerInfo.description.content}</span>
      </div>

      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe id="gmap_canvas" src={contactBannerInfo.mapURL} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
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
          <i data-aos="fade-down" className={merchantData.Contact.location.fontawesome_icon}></i> 
          <span data-aos="fade-down"> {merchantData.Contact.location.address}</span>
        </div>

        <div className='getintouch_section_left_cont'>
          <i data-aos="fade-down" className={merchantData.Contact.phone.fontawesome_icon}></i> 
          <span data-aos="fade-down">{merchantData.Contact.phone.title}</span>
        </div>

        <div className='getintouch_section_left_cont'>
          <i data-aos="fade-down" className={merchantData.Contact.email.fontawesome_icon}></i> 
          <span data-aos="fade-down">{merchantData.Contact.email.mail}</span>
        </div>

        <div className='getintouch_section_left_socials'>
          <h3 data-aos="fade-down">{merchantData.socials.heading}</h3>
          <span data-aos="fade-left">
            {merchantData.socials.social.map(function(item){
              return(
                <a href={item.link}><i className={item.fontawesome_icon}></i></a>
              )
            })}
          </span>
        </div>
      </section>
      
      <section className='getintouch_section_right'>
        <h3 data-aos="fade-up">{merchantData.contactUsPage.contactFormTitle}</h3>
        <span className='getintouch_section_right_note'>
          <span data-aos="fade-up">{merchantData.contactUsPage.contactFormDescription}</span>
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
            <iframe id="gmap_canvas" src={merchantData.contactUsPage.mapLocation} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe>
          </div>
      </div>
    </section>
    </>
  )
}
