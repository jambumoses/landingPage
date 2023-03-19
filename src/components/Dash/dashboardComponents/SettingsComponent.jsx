import React from "react";
import "../css/SettingsComponent.css";
import { constantActions } from '../../../store/constantSlice';
import { useDispatch, useSelector } from "react-redux";

export default function SettingsComponent() {

  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.merchant.CompanyTitle);

  // page titles
  dispatch(
    constantActions.updatePageTitles(companyName + " . " + "Settings")
  );
  dispatch(constantActions.setCurrentPage("Dashboard"));

  return (
    <>
      <section className="SettingsComponent-section">
        <h2>Settings</h2>
      </section>
    </>
  );
}
