import React from 'react'
import '../styles/home.css';
import HomeNav from './HomeNav';
import LeftDashboard from './LeftDashboard';

const Home = () => {
  return (
    <div>
      <HomeNav/>
      <LeftDashboard/>
    </div>
  )
}

export default Home