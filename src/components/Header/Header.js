import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'


const Header = () => {
    return (
        <div>
            <div className='img-container'>
                <img src={logo} alt="" />
            </div>
            <nav className='navbar'>
                <ul>
                    <li><a href="/Shop"> Shop</a></li>
                    <li><a href="/Order Review"> Order Review</a></li>
                    <li><a href="/Manage Inventory here">Manage Inventory here</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;