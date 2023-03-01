import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { constantActions } from '../store/constantSlice';

export default function Verification({type}) {

    const dispatch = useDispatch();

    dispatch(constantActions.updatePageTitles("Verification"));
    dispatch(constantActions.setCurrentPage("verification"));

    const [verificationType,changeVerification] = useState("resetpassword");/* its carries the type variable and the feed of verification */

    function Moveback(){
        window.history.back();
    }
   
    
    return (
        <>
        {/* textures */}
        <div className='login_texture' style={{backgroundImage: `url(${ require("./img/texture1.jpg") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
    
        <section className='login_blur'>
            {/* 
            <span className='login_close'><i className="fa fa-close"></i></span>
             */}
            <form action="" method="post">
                <div className='login_head' style={{marginBottom:" 10px"}}>
                    <span>verfiy</span>
                    <span to="login" onClick={Moveback} className="a">back</span>
                </div>
                <div className='login_head' style={{marginBottom:" 5px"}}>
                    <span style={{fontFamily:"poppins,sans-serif",fontSize:"13px",fontWeight:"initial",textTransform:"lowercase",textAlign:"center"}}>
                        Lost your password? Please enter your email address. You will receive a link to create a new password via email or you can create a new account.
                    </span>
                </div>
                <div className='login_inputs' style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                    <input style={{textAlign:"center",width:"50%",borderRadius:"30px"}} type="text" name="VerificationCode" placeholder='Verification Code' required/>
                </div>
    
                <div className='login_btn' style={{justifyContent: "space-between"}}>
                    <Link to="register" style={{fontFamily:"poppins,sans-serif",fontSize:"13px",fontWeight:"initial",textTransform:"capitalize", textDecoration: "none"}}>Resend Code</Link>
                    {(verificationType == "resetpassword")?<button type="submit">reset password</button>:null}
                    {(verificationType == "emailverification")?<button type="submit">send verification</button>:null}
                </div>
            </form>
        </section>
        </>
      )
}
