import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useSelector} from "react-redux"
import { commerce } from './lib/commerce';

import {Link} from "react-router-dom";

export default function Nav() {
    const [cartNo,setCartCount] = useState()
    const [dropDownCategories,setCategoriesDropDown] = useState([])

    const constantInfo = useSelector(state=>state.constant.data)

    const getCartCount = async ()=>{
      const {data:cartNumber} = await commerce.cart.retrieve();
      setCartCount(cartNumber)
    }

    const DropDownCategories = async ()=>{
      const {data: dropdown} = await commerce.categories.list();
      setCategoriesDropDown(dropdown)
    }
    
    /* update on useEffect */
    useEffect(()=>{
      getCartCount()
      DropDownCategories()
    },[])

    /* update every after 1000 seconds */
    setInterval(() => {
      getCartCount()
      DropDownCategories()
    }, 1000);
  
  
    
  function NavDropDown({data}){
    return(
        <ul className='category_dropdown'>
            {data.map(function(item){
                return(
                    <li className='border-d'><a href=''>{item.name}</a></li>
                )
            })}
        </ul>
    )
  }

  return (
    <>

    <nav className='navigation'>
        <div className='navigation_logo_section'>
            <img src={require(`${constantInfo.logo.nav}`)} alt="" />
        </div>

        <nav className='navigation_nav'>
            <div>
                {/* <a href="#" >home</a> */}
                <Link to="/" className='nav-link active'>home</Link>
                <Link to="/categories" className='nav-link category_drop_cont'>
                    <span className='category_drop nav-link'>categories <i style={{color:"gray",fontSize: "14px"}} className="fa fa-angle-down"></i></span>
                    
                    {(dropDownCategories.length > 0) && <NavDropDown data={dropDownCategories}/>}
                
                </Link>
                <Link to="/orders" className='nav-link'>order now</Link>
                <Link to="/about" className='nav-link'>about us</Link>
                <Link to="/brands" className='nav-link'>brands</Link>
                {/* <Link to="/home" className='nav-link'>opportunties</Link> */}
                {/* <Link to="/news" className='nav-link'>news</Link> */}
                <Link to="/contact" className='nav-link'>contact us</Link>
            </div>
            <div className='navigation_nav_accounts'>
                <Link to="/accounts" className='user_links account-drop_cont'>
                    <span className='nav-icon'><i className="fa fa-user"></i></span>
{/*                     <ul className='account_dropdown'>
                        <li className='border-d'><a href=''>signup</a></li>
                        <li className='border-d'><a href=''>signin</a></li>
                        <li><a href=''>logout</a></li>
                    </ul> */}
                </Link>
                {/* <span onClick={showAccount} className='user_links'><i className="fa fa-user" style={{fontSize:"16px", color:"lightgreen",cursor: "pointer"}}></i></span> */}
                <Link to="/cart" className='user_links'><span className='nav-icon'><i className="fa fa-shopping-cart"></i> <sup style={{color:"grey"}}>{cartNo}</sup></span></Link>
            </div>
        </nav>

        <div className='navigation_search_section'>
            <form action="" method="post">
                <input type="search" name="search" placeholder='search here'/>
                <button type='button'><SearchIcon sx={{color: "pink"}}/></button>
            </form>
        </div>
    </nav>
    <section className='navigation_menu_section'>
      <div className='navigation_menu_section_logo_section'>
      <img src={require(`${constantInfo.logo.nav}`)} alt="" />
      </div>
      <div className='navigation_menu_section_menu_logo'><i className="fa fa-bars"></i></div>
    </section>
    </>
  )
}
