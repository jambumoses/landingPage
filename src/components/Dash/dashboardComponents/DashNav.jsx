import React from 'react';
import "../css/DashNav.css";

import img from "../../img/member.jpg";
import logo from "../../img/AQ-LOGO.png";

function DashNav() {
  return (
    <nav className='DashNav'>
      <div className='dash-titles'>
        <span className='dashLogo'>
          <img src={logo} alt="" />
        </span>
        <div className='title'>Dashboard</div>
      </div>

      <div className='dash-profile'>
        <span className='profile-photo'>
          <img src={img} alt="" />
        </span>

        <span className='profile-user'>jambu moses <span><i className="fa fa-dropdown">a</i></span></span>
        <div className='profile-user-dropdown'>
          logo out
        </div>
      </div>
    </nav>
  )}

export default DashNav