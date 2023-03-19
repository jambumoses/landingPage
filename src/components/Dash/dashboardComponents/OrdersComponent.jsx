import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/OrdersComponent.css";
import { constantActions } from '../../../store/constantSlice';


export default function OrdersComponent() {

  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.merchant.CompanyTitle)

  // page titles
  dispatch(constantActions.updatePageTitles(companyName+" . "+"Orders"));
  dispatch(constantActions.setCurrentPage("Dashboard"));

  return (
    <>
      <section className="OrdersComponent-section">
        <h2>Orders</h2>
      </section>
    </>
  );
}
