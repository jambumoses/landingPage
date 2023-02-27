import React from 'react'
import { Link } from 'react-router-dom'

export default function Login({setAccountPage}) {

    function RegisterPage(){
        setAccountPage("signup")
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
            <div className='login_head'>
                <span>login</span>
                <Link to="register" className="a">signup / create account</Link>
            </div>
            <div className='login_inputs'>
                <input type="text" name="emailORusername" placeholder='Enter Your Username or Email' required/>
            </div>
            <div className='login_inputs'>
                <input type="password" name="password" placeholder='Enter Your Password' required/>
            </div>
            <div className='login_check'>
                <span><input type="checkbox" name="rememberMe"/> remember me</span>
                <Link className='checkbox_a' to="lost-password">lost your password?</Link>
            </div>
            <div className='login_btn'>
                <button type="submit">login</button>
            </div>
        </form>
    </section>
    </>
  )
}
