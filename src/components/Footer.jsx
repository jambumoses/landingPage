import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import FooterBrands from './FooterBrands';
import NewsLetters from './NewsLetters';

import { useSelector } from 'react-redux';

export default function Footer() {

    const constantInfo = useSelector(state=>state.constant.data)
    const merchantData = useSelector(state=>state.merchant)

    const categoriesData = useSelector(state=>state.categories.categories)

    const newyear =new Date().getFullYear();
    const [year,setYear] = useState(newyear);

    setInterval(function(){
        const currentYear = new Date().getFullYear();
        setYear(currentYear);
    },5000);

  return (
    <>
    <NewsLetters/>

    <FooterBrands/>

    <section className='footer'>
        <section className='footer_container'>
            <section className='footer_logo_contain'>
                <div className='footer_logo'>
                    <img src={require(`${merchantData.logo.footer}`)} alt="" />
                </div>
                <span className='footer_logo_Description'>{merchantData.CompanyDescription}</span>
            </section>

            <section className='footer_note_contain'>
                <div className='foot_note'>
                    <span className='foot_note_title'>quick link</span>
                    <div className='foot_note_info'>
                        {
                            constantInfo.navigation.map(function(item){
                                return(
                                    <span><Link to={item.link} className='foot_note_info_c foot_note_info_nav'>{item.name}</Link></span>
                                )
                            })
                        }
                        
                    </div>
                </div>

                <div className='foot_note'>
                    <span className='foot_note_title'>Our Products</span>
                    <div className='foot_note_info'>
                        {
                            categoriesData.slice(0,6).map(function(item){
                                return(
                                    <span><a key={item.id} href="#" className='foot_note_info_c'>{item.category}</a></span>
                                )
                            })
                        }
                        <span><a href="#" className='foot_note_info_c'>see all ...</a></span>
                    </div>
                </div>

                <div className='foot_note'>
                    <span className='foot_note_title'>contact us</span>
                    <div className='foot_note_info'>
                        <span><i className={merchantData.Contact.location.fontawesome_icon} style={{color:"white",fontSize: "15px"}}></i> <a href="https://google.map">{merchantData.Contact.location.address}</a></span>
                        <span><i className={merchantData.Contact.phone.fontawesome_icon} style={{color:"white",fontSize: "15px"}}></i> <a href="tel:+256776291115">{merchantData.Contact.phone.title}</a></span>
                        <span><i className={merchantData.Contact.email.fontawesome_icon} style={{color:"white",fontSize: "15px"}}></i> <a href="mailto:info@africanqueen.co.ug" >{merchantData.Contact.email.mail}</a></span>
                    </div>
                    <div className='footer_socials'>
                        <span className='footer_socials_title'>follow us</span>
                        <span className='footer_socials_listings'>
                            {
                                merchantData.socials.social.map(function(item){
                                    return(
                                        <a key={item.id} href={item.link}><i className={item.fontawesome_icon} style={{color:"white",fontSize: "15px"}}></i></a>
                                    )
                                })
                            }
                        </span>
                    </div>
                </div>
            </section>
        </section>

        <section className='footer_bottom'>
        © {year} {merchantData.footerCompanyTitle}. All Rights Reserved.
        </section>
    </section>
    </>
  )
}
