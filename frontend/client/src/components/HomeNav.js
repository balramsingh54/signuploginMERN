import React from 'react';
import { TbGridDots } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
// import Avatar from '@mui/material/Avatar';
import '../styles/homeNav.css';

const HomeNav = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light nv">
        <div className="container-fluid main">
          <div>
            <a className="navbar-brand" href="#">TECHNOLOGY</a>
          </div>
          <div className="m">
            <div className="navbar-nav ri">
              <p className="nav-right w"><MdLocationOn /></p>
              <p className="nav-right"><TbGridDots /></p>
              <p className="nav-right">Name</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default HomeNav