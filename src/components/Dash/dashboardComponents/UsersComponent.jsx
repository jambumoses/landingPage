import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/UsersComponent.css";
import { constantActions } from '../../../store/constantSlice';

export default function UsersComponent() {

  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.merchant.CompanyTitle);

  // page titles
  dispatch(
    constantActions.updatePageTitles(companyName + " . " + "Users")
  );
  dispatch(constantActions.setCurrentPage("Dashboard"));

  return (
    <>
      <section className="UsersComponent-section">
        <h2>Users</h2>
      </section>
    </>
  );
}
