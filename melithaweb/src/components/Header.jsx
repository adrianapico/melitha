import NavMenu from './header/NavMenu';
import LogoMelitha from '../assets/logoMelitha.svg';
import { Container, Navbar } from 'react-bootstrap';
import Cart from './header/Cart';
import Search from './header/Search';

function MelithaHeader() {
   return (
      <Navbar className='melithaHeader'>
        <Container>
          {/*startLogo- This place is for change Melitha's logo */}
            <Navbar.Brand >
                <img 
                // PENDIENTE ENLAZAR EL LOGO A LA PAGINA PRINCIPAL, PRODUCTS
                src= {LogoMelitha}
                width="150"
                height="150"
                className="d-inline-block align-top"
                alt="Logo Melitha"
                />
            </Navbar.Brand>
          {/* endLogo */}

              <Search/>
              <Cart/>
              <NavMenu/> 
        </Container>
      </Navbar>
   );
 }

export default MelithaHeader;