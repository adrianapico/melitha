import React from 'react'
import OwnerMelitha from '../assets/OwnerMelitha.jpeg'
import MelithaNavbar from '../components/Navbar'

const Melitha = () => {
  return (
    <>
      <MelithaNavbar/>
      <div className='Melitha'>
        

        <p className='titlesMelitha'>¿Quiénes Somos?</p>

        <img
            className="ownerMelitha"
            width={'20%'}
            src={ OwnerMelitha}
            alt="OwnerMelitha"
          />

          <p>
            Melitha es un emprendimiento Santandereano que gracias al gusto de su creadora por los postres, empezó a perfeccionar sus recetas de postres lo que después se convertirían en la marca que esta construyendo a través de Melitha.

            Actualmente, Melitha también ofrece tortas y en su estand también ofrece obleas, estas son ofrecidas con mermeladas especiales producidas por su creadora.
          </p>

      </div>

    </>
    
    
  )
}

export default Melitha