import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import banner from '../data/data.json'

var  start = banner.banner.start;

const Slider = () => {


  return (
    // start.merastart.length ? 
      <Carousel>

        {start.map((item, i) => (

          <CarouselItem key ={i}>

            <img src={item} alt="" className="d-block w-100" />

          </CarouselItem>

        ))}

      </Carousel>
    )
}

export default Slider


