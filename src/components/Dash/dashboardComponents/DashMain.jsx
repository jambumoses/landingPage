import React from "react";
import "../css/DashMain.css";

import Main from "./Main";
import SideBar from "./SideBar";

export default function DashMain() {
  return (
    <section className="DashMain">
      <SideBar />
      <Main />
    </section>
  );
}
