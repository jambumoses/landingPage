import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/main.css";
import { constantActions } from '../../../store/constantSlice';
import DashFooter from "./DashFooter";


export default function Main() {

  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.merchant.CompanyTitle)

  // page titles
  dispatch(constantActions.updatePageTitles(companyName+" . "+"Dashboard"));
  dispatch(constantActions.setCurrentPage("Dashboard"));

  return (
    <>
      <section className="HomeComponent-section">
        <h2>home</h2>
        <DashFooter/>
      </section>
    </>
  );
}
