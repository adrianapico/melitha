import React from 'react'; 
import '../styles/index.css';
import { Container } from 'react-bootstrap';
import  Whatsapp from './footer/Whatsapp';
import Ubication from './footer/Ubication';
import PaymentMelitha from './footer/PaymentMelitha';


function Footer() {
  return (
    <Container>
      <footer className='containerFooter'>
        <h1>Información de contacto Melitha</h1>
        <Whatsapp /> 
        <Ubication />
        <PaymentMelitha />

      </footer>
      
    </Container>
  )
}

export default Footer
