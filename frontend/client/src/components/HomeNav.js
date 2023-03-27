import React from 'react';
import { TbGridDots } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import '../styles/homeNav.css';

const HomeNav = () => {
  return (
    <div className='navbar-header'>
      <nav className="navbar navbar-light nv">
        <div className="container-fluid main">
          <div>
            <Link className ="navbar-brand logo " to = "/dashboard">TECHNOLOGY</Link>
          </div>
          <div className="m">
            <div className="navbar-nav ri">
              <p className="nav-right w"><MdLocationOn /></p>
              <p className="nav-right"><TbGridDots /></p>
              <p className="nav-right">Balram Singh</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default HomeNav