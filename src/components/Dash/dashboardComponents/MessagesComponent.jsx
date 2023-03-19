import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { constantActions } from "../../../store/constantSlice";

export default function MessagesComponent() {
  
    const dispatch = useDispatch();
  const companyName = useSelector((state) => state.merchant.CompanyTitle);

  // page titles
  dispatch(
    constantActions.updatePageTitles(companyName + " . " + "Messages")
  );
  dispatch(constantActions.setCurrentPage("Dashboard"));

  return <div>MessagesComponent</div>;
}
