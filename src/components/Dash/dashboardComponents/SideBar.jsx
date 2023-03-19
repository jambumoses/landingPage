import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/sideBar.css";

function SideBar() {

  const Dashproducts = useSelector(state=>state.products.products);
  const merchantData = useSelector(state=>state.merchant);
  const Dashbrands = useSelector(state=>state.brands.brands.brands);
  const Categories = useSelector(state=>state.categories.categories);

  const currentPage = useSelector(state=>state.constant.currentPage)
  const DashMessages = useSelector((state) => state.messages.messages);

  const Emails = useSelector(state=>state.emails.emails);

  return (
    <>
      <aside>
        <ul>
          <li><Link to="/dashboard" className={`a ${(currentPage == "Dashboard") && 'active'}`} href="">home</Link></li>
          <li><Link to="/dashboardmerchant" className={`a ${(currentPage == "DashMerchant") && 'active'}`} href="">merchant</Link></li>
          <li><Link to="/dashboardbanners" className={`a ${(currentPage == "DashBanners") && 'active'}`} href="">banners</Link></li>
          <li><Link to="/dashboardbrands" className={`a ${(currentPage == "DashBrands") && 'active'}`} href="">brands <span style={{fontSize: "13px",paddingLeft:"10px", color: "skyblue"}}>{Dashbrands.length}</span></Link></li>
          <li><Link to="/dashboardproducts" className={`a ${(currentPage == "DashProducts") && 'active'}`} href="">products <span style={{fontSize: "13px",paddingLeft:"10px", color: "skyblue"}}>{Dashproducts.length}</span></Link></li>
          <li><Link to="/dashboardcategories" className={`a ${(currentPage == "DashCategories") && 'active'}`} href="">categories <span style={{fontSize: "13px",paddingLeft:"10px", color: "skyblue"}}>{Categories.length}</span></Link></li>
          <li><Link to="/dashboardorders" className={`a ${(currentPage == "DashOrders") && 'active'}`} href="">orders <span style={{display: "",fontSize:"14px"}}> <i style={{fontSize: "15px",paddingLeft:"10px", color: "skyblue"}} className="fa fa-bell"></i> <sup>10</sup></span> </Link></li>
          <li><Link to="/dashboardtrends" className={`a ${(currentPage == "DashTrends") && 'active'}`} href="">trends</Link></li>
          <li><Link to="/dashboardusers" className={`a ${(currentPage == "DashUsers") && 'active'}`} href="">users </Link></li>
          <li><Link to="/messages" className={`a ${(currentPage == "DashMessages") && 'active'}`} href="">messages <span style={{display: "",fontSize:"14px"}}> <i style={{fontSize: "15px",paddingLeft:"10px", color: "lightgreen"}} className="fa fa-bell"></i> <sup style={{fontSize: "12px", color: "black"}}>{DashMessages.length}</sup></span></Link></li>
          <li><Link to="/dashboardemaillisting" className={`a ${(currentPage == "DashEmailListing") && 'active'}`} href="">email listing <span style={{fontSize: "13px",paddingLeft:"10px", color: "skyblue"}}> {Emails.length}</span></Link></li>
          <li><Link to="/dashboardsettings" className={`a ${(currentPage == "DashSettings") && 'active'}`} href="">settings</Link></li>
        </ul>
      </aside>
    </>
  );
}

export default SideBar;
