import React from 'react';
import '../../styles/Products.css';
import MelithaNavbar from '../../components/Navbar';
import SocialMediaMelitha from '../header/SocialMediaMelitha';
import BannerOne from '../products/BannerOne';
import CardOfProducts from '../products/CardOfProducts';
// import Footer from '../Footer.jsx'

const Products = () => {
  return (
 

    <div className='ContainerProducts'>     
    
        {/* Import elements for the Header of the page */}
        <MelithaNavbar/>
        {/* START body products*/}
        <BannerOne/>
        <SocialMediaMelitha/>

        <h1>AQUI DEBERIA IR EL FILTRO</h1>
        <div className='cardofProducts'>
          <CardOfProducts/>

        </div>



        {/* END body products*/}

        {/* Import elements for the Footer of the page */}
        {/* <Footer/> */}
    </div>
  )
}

export default Products