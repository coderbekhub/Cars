import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CaruselImg1 from '../img/carusel_img1.jpg';
import CaruselImg2 from "../img/carusel_img2.jpg";
import CaruselImg3 from "../img/carusel_img3.jpg";
import '../styles/Carusel.css';


export default function CarsCarusel() {
  return (
     <section className='carusel'>
      <div className="container">
        <Carousel>
          <Carousel.Item interval={1000} className="carusel-img">
            <img
              className="carusel_car_img"
              src={CaruselImg3}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="carusel_car_img"
              src={CaruselImg1}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carusel_car_img"
              src={CaruselImg2}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

     </section>
  );
}
