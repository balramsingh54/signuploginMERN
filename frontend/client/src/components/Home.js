import React from 'react'
import '../styles/home.css';
import HomeNav from './HomeNav';
import LeftDashboard from './LeftDashboard';
import RightDashboard from './RightDashboard';

const Home = () => {
  return (
    <div>
      <HomeNav/>
      <LeftDashboard/>
      <RightDashboard/>
    </div>
  )
}

export default Home