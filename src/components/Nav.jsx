import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useSelector} from "react-redux"
import { commerce } from './lib/commerce';
import $ from 'jquery';
import {Link} from "react-router-dom";

export default function Nav() {
    //const [cartNo,setCartCount] = useState(7)
    const cartNo = useSelector(state=>state.constant.cartData.cartCount)
    const [dropDownCategories,setCategoriesDropDown] = useState([
      {
        id: 1,
        name: "servittes",
        slug: "servittes",
      },
      {
        id: 2,
        name: "toilet papper",
        slug: "toilet paper",
      },
      {
        id: 3,
        name: "thermal tissues",
        slug: "thermal tissues",
      },
      {
        id: 4,
        name: "facial tissues",
        slug: "facial tissues",
      },
      {
        id: 5,
        name: "kitchen towels",
        slug: "kitchen towels",
      },
      {
        id: 6,
        name: "cleaner bags",
        slug: "cleaner bags",
      },
      {
        id: 7,
        name: "sanitizer",
        slug: "sanitizer",
      },
      {
        id: 8,
        name: "gabbage bags",
        slug: "gabbage bags",
      },
      {
      id: 12,
      name: "servittes",
      slug: "servittes",
    },
    {
      id: 32,
      name: "toilet papper",
      slug: "toilet paper",
    },
    {
      id: 34,
      name: "thermal tissues",
      slug: "thermal tissues",
    },
    {
      id: 44,
      name: "facial tissues",
      slug: "facial tissues",
    },
    {
      id: 53,
      name: "kitchen towels",
      slug: "kitchen towels",
    },
    {
      id: 64,
      name: "cleaner bags",
      slug: "cleaner bags",
    },
    {
      id: 734,
      name: "sanitizer",
      slug: "sanitizer",
    },
    {
      id: 834,
      name: "gabbage bags",
      slug: "gabbage bags",
    }
    ])

    const constantInfo = useSelector(state=>state.constant.data);
  
  
    
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



  function MobileMenu(){
    $('.mobile_menu').slideToggle("medium").css("display","flex")
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

      <div className='navigation_menu_section_menu_logo'>
        <Link to="/cart" className='a'><i className="fa fa-shopping-cart"></i> <sup style={{color:"grey"}}>{cartNo}</sup></Link>
        <i onClick={MobileMenu} className="fa fa-bars"></i>
      </div>
    </section>

    <section className='mobile_menu'>
      <ul>
        <li><Link onClick={MobileMenu} className='a' to="/">home</Link></li>
        <li><Link onClick={MobileMenu} className='a' to="/categories">categories</Link></li>
        <li><Link onClick={MobileMenu} className='a' to="/orders">order now</Link></li>
        <li><Link onClick={MobileMenu} className='a' to="/about">about us</Link></li>
        <li><Link onClick={MobileMenu} className='a' to="/brands">brands</Link></li>
        <li><Link onClick={MobileMenu} className='a' to="/contact">contact us</Link></li>
      </ul>

      <div className='mobile_section_right'>
        <div className='search_sec'>
          <form action="" method="post">
            <input type="search" name="search" placeholder='search here'/>
            <button type='button'><SearchIcon sx={{color: "pink"}}/></button>
          </form>
        </div>

        <div className='icons_sec'>
          <span className='account'>
            <span><Link onClick={MobileMenu} to="login" className='a'>login</Link></span>
            <span><Link onClick={MobileMenu} to="register" className='a'>create account</Link></span>
          </span>

          <span className='cart_and_socails'>
            {/* <span className='cart'><Link className='a'><i className="fa fa-shopping-cart"></i> <sup style={{color:"grey"}}>{20}</sup></Link></span> */}
            <span className='socials'>
            {
                                constantInfo.socials.social.map(function(item){
                                    return(
                                        <a href={item.link}><i className={item.fontawesome_icon} style={{color:"grey",fontSize: "20px"}}></i></a>
                                    )
                                })
            }
            </span>
          </span>
        </div>
      </div>
    </section>
    </>
  )
}
