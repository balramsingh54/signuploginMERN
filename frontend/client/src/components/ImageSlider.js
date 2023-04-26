import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import slider from '../data/balram.json'
import '../styles/ImageSlider.css'

//import banner from '../data/data.json'

//import '../../public/CarouselImage'
//var  start = banner.banner.start;
var start = slider.slider;


const ImageSlider = () => {
    return (
        <Carousel>

            {start.map((item, i) => (

                <CarouselItem key={i}>

                    <img src={item} alt="" className="d-block w-100" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>


                </CarouselItem>

            ))}

        </Carousel>
    )
}

export default ImageSlider