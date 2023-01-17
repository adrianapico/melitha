import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import LogoMelitha from '../../assets/logoMelitha.svg';
import SocialMediaMelitha from './SocialMediaMelitha';

function NavMenu () {
    return (
        
        <div className='navMenu'>
            {/* If I want to change the background of the Navbar I have to change "bg" */}
            {[false].map((expand) => (

                <Navbar key={expand} bg="ligth" expand={expand} className="mb-3">

                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end" 
                        >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                <img
                                src= {LogoMelitha}
                                width="200"
                                height="200"
                                className="d-inline-block align-top"
                                alt="Logo Melitha"
                                />
                                <SocialMediaMelitha/>
                                

                            </Offcanvas.Title>
                        </Offcanvas.Header>

                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link path='/Home'>Home</Nav.Link>
                                
                                <NavDropdown
                                    title="Productos"
                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                >
                                    <NavDropdown.Item path='/'>Postres</NavDropdown.Item>
                                    <NavDropdown.Item path='/'>Tortas</NavDropdown.Item>
                                    <NavDropdown.Divider />      
                                </NavDropdown>

                                <Nav.Link path='/Melitha'>Nosotros</Nav.Link>
                                </Nav>

                            </Offcanvas.Body>

                    </Navbar.Offcanvas>

                </Navbar>
        

             ))}
                
        </div>
        
    )
}

export default NavMenu;