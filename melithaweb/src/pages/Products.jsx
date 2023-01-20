import React from 'react';
import '../styles/Products.css';
import MelithaNavbar from '../components/Header';
import SocialMediaMelitha from '../components/header/SocialMediaMelitha';
import BannerOne from '../components/products/BannerOne';
import Cards from '../components/products/Cards';
import Data from '../Data';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer'

function Products  ( ) {

  const { allproducts } = Data
  return ( 
    <div className='ContainerProducts'>     
    
        {/* Import elements for the Header of the page */}
        <MelithaNavbar/>
        {/* START body products*/}
        <BannerOne/>
        <SocialMediaMelitha/>

        <h1>AQUI DEBERIA IR EL FILTRO</h1>
        <Container className='allCardsProducts'>
          <Cards allproducts={ allproducts } />
        </Container>
       
        {/* END body products*/}

        {/* Import elements for the Footer of the page */}
        <Footer/>
    </div>
  )
}

export default Products