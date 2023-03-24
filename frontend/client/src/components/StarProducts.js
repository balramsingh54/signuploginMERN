import React from 'react';
import data from '../data/data.json';
import "../styles/StarProducts.css";


const StarProducts = () => {
  return (
    <div className='starProduct1'>
      <div className="left">
        <img className='starpdt' src={data.starProduct[0].image} alt="" />
      </div>
      <div className="right">
        <div className="uppertwo">
          <div>
            <img className='starpdt' src={data.starProduct[1].image} alt="" />
          </div>
          <div>
            <img className='starpdt' src={data.starProduct[2].image} alt="" />
          </div>
        </div>
        <div className="lower">
          <img className='starpdt' src={data.starProduct[3].image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default StarProducts