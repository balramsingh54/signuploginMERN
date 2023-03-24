// import { Slider } from '@mui/material'
import React from 'react'
import PreNavbar from './PreNavbar'
import Slider from './Slider'
import Offers from './Offers';
import Headings from './Headings';
import StarProducts from './StarProducts.js';
import HotAccessoriesMenu from './HotAccessoriesMenu';
import ProductReviews from './ProductReviews';
import Footer from './Footer';
import FooterFinal from './FooterFinal';
import HotAccessories from './HotAccessories';
import value from '../data/data.json';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <PreNavbar></PreNavbar>
        <Slider></Slider>
        <Offers />
        <Headings text="STAR PRODUCTS" />
        <StarProducts />
        <Headings text="HOT ACCESSORIES" />
        <HotAccessoriesMenu />

        <Routes>
          <Route path='music' element={<HotAccessories music={value.hotAccessoriesCover.music} cover={value.hotAccessories.music[0].image} />}></Route>
          <Route path='smartDevices' element={<HotAccessories data1={value.hotAccessoriesCover.smartDevice} />}></Route>
          <Route path='home' element={<HotAccessories data1={value.hotAccessoriesCover.home} />}></Route>
          <Route path='lifestyle' element={<HotAccessories data1={value.hotAccessoriesCover.lifeStyle} />}></Route>
          <Route path='mobileaccessories' element={<HotAccessories data1={value.hotAccessoriesCover.mobileAccessories} />}></Route>
        </Routes>

        <Headings text="PRODUCT REVIEWS" />
        <ProductReviews />
        <Footer />
        <FooterFinal />
    </div>
  )
}

export default Dashboard