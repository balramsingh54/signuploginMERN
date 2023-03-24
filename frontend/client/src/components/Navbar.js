import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import logo from "../data/data.json";

const NavBar = () => {
    return (
        <div className='Nav'>
            <div className="logo">
                <Link to="/"> 
                    <img id='logoImage' src = { logo } alt="Not" />
                </Link>
            </div>
                <Link className='navlinks' to='/miphones'>Mi Phones</Link>
                <Link className='navlinks' to='/redmi'>Redmi Phones</Link>
                <Link className='navlinks' to='/tv'>Tv</Link>
                <Link className='navlinks' to='/laptop'>Laptops</Link>
                <Link className='navlinks' to='/fit&life'>Fitness & Lifestyles</Link>
                <Link className='navlinks' to='/home'>Home</Link>
                <Link className='navlinks' to='/radio'>Radio</Link>
                <Link className='navlinks' to='/accessories'>Accessories</Link>
                <div className="searchbox">
                    <input id='search-products' type="text" name='search' placeholder='Search Products' />
                </div>
        </div>
    )
}

export default NavBar;



