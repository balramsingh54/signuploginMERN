import React, { useState } from 'react';
import { TbGridDots } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../styles/homeNav.css';
import NineDot from './NineDot';
// import AddNewUser from './AddNewUserForm';







const HomeNav = () => {

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(true);



  return (
    <div className='navbar-header'>
      <nav className="navbar navbar-light nv">
        <div className="container-fluid main">
          <div>
            <Link className="navbar-brand logo " to="/dashboard">TECHNOLOGY</Link>
          </div>
          <div className="m">
            <div className="navbar-nav ri">
              <p className="nav-right addnewStudent" title='add new student' onClick={() => setShow2(!show2)} ><FaUserPlus/></p>
              <p className="nav-right w" title='location'><MdLocationOn /></p>
              <p className="nav-right" title='classes' onClick={() => setShow(!show)}><TbGridDots /></p>
              <p className="nav-right" title='name'>Balram Singh</p>
            </div>
          </div>
        </div>
      </nav>
      {
        show ? <NineDot /> : null
      },

      {
        // show2 ? <AddNewUser /> : null
      }
    </div>
  )
}

export default HomeNav