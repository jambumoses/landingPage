import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import "./components/statics/css/main.css";
import $ from 'jquery';
import { useDispatch, useSelector } from 'react-redux';

/* import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
 */

import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import About from "./components/About"
import Brands from "./components/Brands"
import Orders from "./components/Orders"
import Categories from "./components/Categories"
import Contact from "./components/Contact"
import Accounts from "./components/Accounts"
import Cart from "./components/Cart"
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import LostPassword from './components/LostPassword';
import Verification from './components/Verification';
import { constantActions } from './store/constantSlice';
import { cartActions } from './store/CartSlice';
import Dashboard from './components/Dash/Dashboard';

import axios from 'axios';
import { bannerActions } from './store/BannerSlice';
import { BrandsActions } from './store/BrandsSlice';
import { productActions } from './store/productSlice';
import { categoriesActions } from './store/categoriesSlice';



export default function App() {

  const dispatch = useDispatch();

  const browserIcons = useSelector(state=>state.merchant.logo.browserTab)
  const currentPage = useSelector(state=>state.constant.currentPage)
  const PageTitles = useSelector(state=>state.constant.currentPageTitle)


  // banner information
  const homeBanner = axios.create({
    baseURL: "http://localhost:3500/arafat/api/banners/homebanner",
    Headers: {
      "Content-type": "application/json",
    },
  });

  const brandsBanner = axios.create({
    baseURL: "http://localhost:3500/arafat/api/banners/brandsbanner",
    Headers: {
      "Content-type": "application/json",
    },
  });

  const contactBanner = axios.create({
    baseURL: "http://localhost:3500/arafat/api/banners/contactbanner",
    Headers: {
      "Content-type": "application/json",
    },
  });

  const aboutBanner = axios.create({
    baseURL: "http://localhost:3500/arafat/api/banners/aboutbanner",
    Headers: {
      "Content-type": "application/json",
    },
  });

  // end of banners


  // brands data
  const brands = axios.create({
    baseURL: "http://localhost:3500/arafat/api/brands",
    Headers: {
      "Content-type": "application/json",
    },
  });


    // products data
    const products = axios.create({
      baseURL: "http://localhost:3500/arafat/api/products",
      Headers: {
        "Content-type": "application/json",
      },
    });


    // categories data
    const categories = axios.create({
      baseURL: "http://localhost:3500/arafat/api/categories",
      Headers: {
        "Content-type": "application/json",
      },
    });

    


  if(currentPage == 'home'){
    $('body').css("overflow","hidden");
  }else{
    $('body').css({
      "overflow-x":"hidden",
      "overflow-y":"auto"
    });
  }

  useEffect(()=>{
    /* Browser icons */
    $("#browser-icons").attr("href", browserIcons);

    // updating page titles
    $("#app-title").text(PageTitles);

    // updating cart data
    dispatch(cartActions.updateCartCount());

    //updating home Banner from database
    homeBanner.get('?_limit=10').then((response) => {
      dispatch(bannerActions.getHomeBanner(response.data));
   });

   //updating brands Banner from database
   brandsBanner.get().then((response)=>{
    dispatch(bannerActions.getBrandsBanner(response.data[0]))
   });

   //updating contact Banner from database
   contactBanner.get().then((response)=>{
    dispatch(bannerActions.getContactBanner(response.data[0]))
   });

   //updating about banner
   aboutBanner.get().then((response)=>{
    dispatch(bannerActions.getAboutBanner(response.data[0]))
   });

   // brands data
   brands.get().then((response)=>{
    dispatch(BrandsActions.getBrands(response.data))
   });

  // products data
   products.get().then((response)=>{
    dispatch(productActions.getProducts(response.data))
   });

  // categories data
   categories.get().then((response)=>{
    dispatch(categoriesActions.getCategories(response.data))
   });

  },[])

  return (
    <>
    <Router>
        {
          (currentPage != "dashboard") && <Nav/>
        }
      
        <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/index" component={Home}/>

                <Route path="/about" component={About} />
                <Route path="/brands" component={Brands} />
                <Route path="/orders" component={Orders}/>
                <Route path="/categories" component={Categories} />
                <Route path="/contact" component={Contact} />
                <Route path="/accounts" component={Accounts} />

                {/* accounts */}
                <Route path="/login" component={Login} />
                <Route path="/lost-password" component={LostPassword}/>
                <Route path="/register" component={Register} />
                <Route path="/verify" component={Verification} />
                <Route path="/cart" component={Cart} />

                {/* Dashboard */}
                <Route path="/dashboard" component={Dashboard} />

                {/* 404 */}
                <Route path='*' component={Home}/>
        </Switch>

        {
          (currentPage != "home" && currentPage != "dashboard") && <Footer/>
        }
        
    </Router>
    </>
  )
}