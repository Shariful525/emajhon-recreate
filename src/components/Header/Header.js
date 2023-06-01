import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'




const Header = () => {
    return (
        <nav className='nav_header'>
            <img src={logo} alt="" />
            <div className='nav_header_list'>
                <a href="/orders">Orders</a>
                <a href="inventory">Inventory</a>
                <a href="about">About</a>
                <a href="/shop">Shop</a>
            </div>
        </nav>
    );
};

export default Header;