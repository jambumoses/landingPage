import React from "react";
import "../css/BannersComponent.css";
import { constantActions } from '../../../store/constantSlice';
import { useDispatch, useSelector } from "react-redux";

export default function BannersComponent() {

  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.merchant.CompanyTitle)

  // page titles
  dispatch(constantActions.updatePageTitles(companyName+" . "+"Banners"));
  dispatch(constantActions.setCurrentPage("Dashboard"));

  return (
    <>
      <section className="BannersComponent-section">
        <h2>Banners</h2>
      </section>
    </>
  );
}
