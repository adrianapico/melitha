import Carousel from 'react-bootstrap/Carousel';
import FirstImage from '../../assets/FirstImage.png';
import '../../styles/Products.css'


function CarouselMelitha() {
  return (
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
  );
}

export default CarouselMelitha;