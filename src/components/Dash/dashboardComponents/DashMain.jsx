import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./Main";
import SideBar from "./SideBar";

import "../css/DashMain.css";
import MerchantsComponent from "./MerchantsComponent";
import BannersComponent from "./BannersComponent";
import BrandsComponent from "./BrandsComponent";
import ProductsComponent from "./ProductsComponent";
import CategoriesComponent from "./CategoriesComponent";
import OrdersComponent from "./OrdersComponent";
import TrendsComponent from "./TrendsComponent";
import UsersComponent from "./UsersComponent";
import EmailListingComponent from "./EmailListingComponent";
import SettingsComponent from "./SettingsComponent";
import MessagesComponent from "./MessagesComponent";

export default function DashMain() {
  return (
    <section className="DashMain">
      <Router>
        <SideBar />
        <Switch>
          <Route path="/dashboard" component={Main} />
          <Route path="/dashboardmerchant" component={MerchantsComponent} />
          <Route path="/dashboardbanners" component={BannersComponent} />
          <Route path="/dashboardbrands" component={BrandsComponent} />
          <Route path="/dashboardproducts" component={ProductsComponent} />
          <Route path="/dashboardcategories" component={CategoriesComponent} />
          <Route path="/dashboardorders" component={OrdersComponent} />
          <Route path="/dashboardtrends" component={TrendsComponent} />
          <Route path="/dashboardusers" component={UsersComponent} />
          <Route path="/messages" component={MessagesComponent} />
          <Route path="/dashboardemaillisting" component={EmailListingComponent} />
          <Route path="/dashboardsettings" component={SettingsComponent} />
        </Switch>
      </Router>
    </section>
  );
}
