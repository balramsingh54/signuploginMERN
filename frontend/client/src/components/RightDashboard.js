import React from 'react';
import '../styles/RightDashboard.css';
import ImageSlider from './ImageSlider';

const RightDashboard = () => {
  return (
    <div>
      <div className='maindashboard'>
        <ImageSlider></ImageSlider>
      </div>    
    </div>
  )
}

export default RightDashboard;