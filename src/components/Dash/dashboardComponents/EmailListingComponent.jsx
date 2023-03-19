import React from "react";
import "../css/EmailListingComponent.css";
import { constantActions } from '../../../store/constantSlice';
import { useDispatch, useSelector } from "react-redux";

export default function EmailListingComponent() {
  
  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.merchant.CompanyTitle)

  // page titles
  dispatch(constantActions.updatePageTitles(companyName+" . "+"Email Listings"));
  dispatch(constantActions.setCurrentPage("Dashboard"));

  return (
    <>
      <section className="EmailListingComponent-section">
        <h2>Email Listings</h2>
      </section>
    </>
  );
}
