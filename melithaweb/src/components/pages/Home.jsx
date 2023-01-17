import React from 'react';
import MelithaNavbar from '../Navbar';
import Carousel from 'react-bootstrap/Carousel';
import FirstImage from '../../assets/FirstImage.png'


function Home() {
  return (
    <div>
      <MelithaNavbar/>
      <p>Dulces creaciones, <br/>¡sorprende con Melitha!</p>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ FirstImage}
            alt="First Image of Carousel"
          />
          <Carousel.Caption id='bannerOne'>

            <p  id='#soprende'>¡SORPRENDE!</p>
            <p id='conMelitha'>Con Melita</p>
          </Carousel.Caption>
        </Carousel.Item>
      
      </Carousel>
      
    </div>
  )
}

export default Home