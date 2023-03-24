import React from 'react';
import "../styles/HotAccessoriesMenu.css";
import { Link } from 'react-router-dom';


const HotAccessoriesMenu = () => {
  return (
    <div className='HotAccessories'>
        <Link className="hotaccessoriesLink" to="/music">Music Store</Link>
        <Link className="hotaccessoriesLink" to="/smartDevices">Smart Devices</Link>
        <Link className="hotaccessoriesLink" to="/home">Home</Link>
        <Link className="hotaccessoriesLink" to="/lifestyle">Lifestyle</Link>
        <Link className="hotaccessoriesLink" to="/mobileaccessories">Mobile Accessories</Link>
    </div>
  )
}

export default HotAccessoriesMenu