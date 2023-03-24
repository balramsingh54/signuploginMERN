import React from 'react';
import "../styles/ProductReviews.css";
import data from '../data/data.json'

const ProductReviews = () => {
  return (
    <div className='reviews'>
        <div className="hovr">
            <img src={data.productReviews[0].image} alt="image" />
            <h4 className='lll'>{data.productReviews[0].name}</h4>
            <h5 className='lll4'>{data.productReviews[0].price}</h5>
        </div>
        <div className="hovr">
            <img src={data.productReviews[1].image} alt="image" />
            <h4 className='lll'>{data.productReviews[1].name}</h4>
            <h5 className='lll4'>{data.productReviews[1].price}</h5>
        </div>
    </div>
  )
}

export default ProductReviews