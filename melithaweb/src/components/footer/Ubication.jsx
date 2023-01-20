import React from 'react';
import '../../styles/index.css'
import {BsFillPinMapFill} from "react-icons/bs";

function Ubication() {
  return (
    <div className='ubication'>

     <BsFillPinMapFill className='pin'/>
     <p className='santander'>SANTANDER</p>
     <div>
        <p>Barrancabermeja</p>
        <p>Bucaramanga</p>
     </div>
     
    </div>
  )
}

export default Ubication