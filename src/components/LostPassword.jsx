import React from 'react'
import { Link } from 'react-router-dom'

export default function LostPassword() {
    return (
        <>
        {/* textures */}
        <div className='login_texture' style={{backgroundImage: `url(${ require("./img/texture1.jpg") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
    
        <section className='login_blur'>
            {/* 
            <span className='login_close'><i className="fa fa-close"></i></span>
             */}
            <form action="/verify" method="get">
                <div className='login_head'>
                    <span>Lost Password</span>
                    <Link to="login" className="a">back to login</Link>
                </div>
                <div className='login_head'>
                    <span style={{fontFamily:"poppins,sans-serif",fontSize:"13px",fontWeight:"initial",textTransform:"lowercase"}}>
                        Lost your password? Please enter your email address. You will receive a link to create a new password via email or you can create a <Link to="register" style={{fontFamily:"poppins,sans-serif",fontSize:"13px",fontWeight:"initial",textTransform:"lowercase", textDecoration: "underline"}}>new account. </Link>
                    </span>
                </div>
                <div className='login_inputs'>
                    <input type="email" name="email" placeholder='Enter Your Email *' required/>
                </div>
    
                <div className='login_btn' style={{justifyContent: "flex-end"}}>
                    <button type="submit">send verification</button>
                </div>
            </form>
        </section>
        </>
      )
}
