import React from "react";
import "../css/sideBar.css";

function SideBar() {
  return (
    <>
      <aside>
        <ul>
          <li className="active">home</li>
          <li>merchant</li>
          <li>banners</li>
          <li>brands</li>
          <li>products</li>
          <li>categories</li>
          <li>orders</li>
          <li>trends</li>
          <li>users</li>
          <li>email listing</li>
          <li>settings</li>
        </ul>
      </aside>
    </>
  );
}

export default SideBar;
