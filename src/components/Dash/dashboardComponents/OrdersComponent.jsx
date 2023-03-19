import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/OrdersComponent.css";
import { constantActions } from '../../../store/constantSlice';
import DashFooter from "./DashFooter";


export default function OrdersComponent() {

  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.merchant.CompanyTitle)

  // page titles
  dispatch(constantActions.updatePageTitles(companyName+" . "+"Orders"));
  dispatch(constantActions.setCurrentPage("DashOrders"));

  return (
    <>
      <section className="OrdersComponent-section">
        <h2>Orders</h2>

        <DashFooter/>
      </section>
    </>
  );
}
