import React,{useState} from "react";
import logo from "../assets/logo.png";
import {RiMenu3Line,RiCloseLine } from "react-icons/ri";
import "./Header.css";
const navItems = [
{
    path:'/',
    name: "Home",
},
{
    path:'/about',
    name: "About",
},
{
    path:'/courses',
    name: "Courses",
},
{
    path:'/contact',
    name: "Contact",
}
];
const Header =() => {
 
    
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };



    return (
        <header className="header" >
        <div className="container">
            <div className="navWrapper ">
                
            <div className="logo">
                <img src={logo} alt="Logo"/>
                <a href="/" className="logo-text">Algogeek</a>
            </div>
            {/* Nav menu section */}
            <div className={`navigation ${
              mobileMenuVisible ? "mobile-menu-visible" : ""
            }`} >
            <ul className="menu ">
                {
                navItems.map(items =>(
                    <li className="nav-items"><a href={items.path}>{items.name}</a></li>
                ))
                }
            </ul>
            </div>
            {/* Nav Button section */}
            <div className="nav-btn">
                <button className="main-btn">Register</button>
                <span className="mobile-view" onClick={toggleMobileMenu}> {mobileMenuVisible ? <RiCloseLine /> : <RiMenu3Line />}</span>
            </div>
            
            </div>    
        </div>  
        </header>
    )
}

export default Header;