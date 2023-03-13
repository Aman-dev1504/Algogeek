import React from 'react'
import logo from '../assets'
const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='nav-wrapper'>
                    <div className='logo'>
                        <div className='logo-img'>
                            <img src={logo} alt="" />
                        </div>
                        <h2>Fitwit</h2>
                    </div>

                    <div className='navigations'>
                        <ul className='Menu'>  
                       
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
