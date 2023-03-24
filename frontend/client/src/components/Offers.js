import React from 'react';
import data from '../data/data.json';
import "../styles/offers.css";

// import Offer from './Offer.js'

var myoffer = data.offer;


const Offers = () => {

  return (
    <div className='offer-section'>
      {myoffer.map((item, i) => {
        return <div key ={i} className="image-offer">
          <img src={item.image} alt="balram" />
        </div>
      })
      }
    </div>
  )
}

export default Offers



