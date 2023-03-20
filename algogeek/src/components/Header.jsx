import React,{useRef,useEffect} from "react";
import logo from "../assets/logo.png";
import {RiMenu3Line} from "react-icons/ri";
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
    // const headerRef = useRef(null);
    // const handleScroll = () => {
    //    if(document.body.scrollTop >80 ||document.documentElement.scrollTop >80 ){
    //           headerRef.current.classList.add("sticky-menu");
    //    }
    //    else{
    //           headerRef.current.classList.remove("sticky-menu");
    //    }    
    // }

    // useEffect(() => {
    //   window.addEventListener("scroll", handleScroll);
    
    //   return () => {
    //     window.removeEventListener("scroll", handleScroll);
    //   }
    // }, [])
    



    return (
        <header className="header" >
        <div className="container">
            <div className="navWrapper">
                
            <div className="logo">
                <img src={logo} alt="Logo"/>
                <a href="/" className="logo-text">Algogeek</a>
            </div>
            {/* Nav menu section */}
            <div className="navigation">
            <ul className="menu">
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
                <span className="mobile-view"><RiMenu3Line/></span>
            </div>
            
            </div>    
        </div>  
        </header>
    )
}

export default Header;