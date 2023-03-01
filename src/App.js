import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import "./components/statics/css/main.css";
import $ from 'jquery';

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

//import { commerce } from './components/lib/commerce';

//import {useSelector,useDispatch} from "react-redux";
//import { productActions } from './store/products-slice';


/* export async function getStaticProps(){
  const merchant = await commerce.merchants.about();
  const {data: categories} = await commerce.categories.list();
  const {data: products} = await commerce.products.list();

  return{
    props: {
      merchant,
      categories,
      products
    }
  }
} */



export default function App() {
  //const dispatch = useDispatch();

/*   const fetchProducts = async () => {
    const {data: products} = await commerce.products.list();
    const {data: categories} = await commerce.categories.list();
    const merchant = await commerce.merchants.about();
    
    dispatch(productActions.getProducts(products));
    //dispatch(categoriesActions.getCategories(categories));
    //dispatch(merchantActions.getMerchant(merchant));
  }

  useEffect(()=>{
    fetchProducts();
  },[]) */


  //const dataP = useSelector(state=>state.api.data);


  return (
    <>
    <Router>
        <Nav/>
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

                <Route path="/login" component={Login} />
                <Route path="/lost-password" component={LostPassword}/>
                <Route path="/register" component={Register} />
                <Route path="/verify" component={Verification} />
                <Route path="/cart" component={Cart} />
                {/* 404 */}
                <Route path='*' component={Home}/>
        </Switch>
        <Footer/>
    </Router>
    </>
  )
}