import Navbar from 'react-bootstrap/Navbar';
import NavMenu from './header/NavMenu';
import LogoMelitha from '../assets/logoMelitha.svg';
import { BsCart, BsSearch } from "react-icons/bs";

function MelithaNavbar() {
   return (
     <div className='melithaNavbar'>

        {/*startLogo- This place is for change Melitha's logo */}
        <Navbar.Brand >
            <img
            src= {LogoMelitha}
            width="200"
            height="200"
            className="d-inline-block align-top"
            alt="Logo Melitha"
            />
        </Navbar.Brand>
        {/* endLogo */}
          
        <div className='iconsNav'>
            <BsSearch/>
            <BsCart/>
            <NavMenu/> 
        </div>  

     </div>
   );
 }

export default MelithaNavbar;