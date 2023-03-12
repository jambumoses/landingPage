import React from "react";
import { Link } from "react-router-dom";
import "../css/sideBar.css";

function SideBar() {
  return (
    <>
      <aside>
        <ul>
          <li><Link to="/dashboard" className="a active" href="">home</Link></li>
          <li><Link to="/dashboardmerchant" className="a" href="">merchant</Link></li>
          <li><Link to="/dashboardbanners" className="a" href="">banners</Link></li>
          <li><Link to="/dashboardbrands" className="a" href="">brands</Link></li>
          <li><Link to="/dashboardproducts" className="a" href="">products</Link></li>
          <li><Link to="/dashboardcategories" className="a" href="">categories</Link></li>
          <li><Link to="/dashboardorders" className="a" href="">orders</Link></li>
          <li><Link to="/dashboardtrends" className="a" href="">trends</Link></li>
          <li><Link to="/dashboardusers" className="a" href="">users</Link></li>
          <li><Link to="/dashboardemaillisting" className="a" href="">email listing</Link></li>
          <li><Link to="/dashboardsettings" className="a" href="">settings</Link></li>
        </ul>
      </aside>
    </>
  );
}

export default SideBar;
