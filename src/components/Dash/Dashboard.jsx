import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { constantActions } from "../../store/constantSlice";

import DashNav from "./dashboardComponents/DashNav";
import DashMain from "./dashboardComponents/DashMain";

function Dashboard() {
  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.merchant.CompanyTitle);

  dispatch(constantActions.updatePageTitles(companyName + " . " + "Dashboard"));
  dispatch(constantActions.setCurrentPage("dashboard"));
  return (
    <>
      <section className="dashboard">
        <DashNav />
        <DashMain />
      </section>
    </>
  );
}

export default Dashboard;
