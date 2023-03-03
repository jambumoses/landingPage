import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch } from 'react-redux';
import { constantActions } from '../store/constantSlice';

export default function Register() {

  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.merchant.CompanyTitle)

  dispatch(constantActions.updatePageTitles(companyName+" . "+"Register"));
  dispatch(constantActions.setCurrentPage("register"));

  return (
    <>
    {/* textures */}
    <div className='login_texture' style={{backgroundImage: `url(${ require("./img/texture1.jpg") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>

    <section className='login_blur'>
        {/* 
        <span className='login_close'><i className="fa fa-close"></i></span>
         */}
        <form action="" method="post">
            <div className='login_head'>
                <span>Register</span>
                <Link to="login" className="a">back to login</Link>
            </div>
            <div className='login_inputs'>
                <input type="text" name="firstname" placeholder='FirstName *' id="" required/>
            </div>
            <div className='login_inputs'>
              <input type="text" name="lastname" placeholder='LastName *' id="" required/>
            </div>
            <div className='login_inputs'>
              <input type="date" name="DOB" placeholder='Date Of Birth *' id="" required/>
            </div>

            <div className='login_inputs'>
                <input type="email" name="email" placeholder='Email *' id="" required/>
            </div>
            <div className='login_inputs'>
                <input type="password" name="confirmPassword" placeholder='Password *'required/>
            </div>
            <div className='login_inputs'>
                <input type="password" name="password" placeholder='confirm Password *' required/>
            </div>

            <div className='login_btn' style={{justifyContent: "flex-end"}}>
                <button type="submit">continue</button>
            </div>
        </form>
    </section>
    </>
  )
}
