import React from 'react'
import { Badge, Dropdown, Nav } from 'react-bootstrap'
import { BsCart } from "react-icons/bs";


const Cart = () => {
  return (
    <Nav>
        <Dropdown>
            <Dropdown.Toggle variant="light" >
                <BsCart color="#8C3503" fontSize={"25px"}/>
                <Badge> { 5 } </Badge>
            </Dropdown.Toggle>
        

          <Dropdown.Menu style={ { minWidth: 370} }>
              <span style={ { padding: 10} }>Cart is empty!</span>
          </Dropdown.Menu>
        </Dropdown>
    </Nav>
  );
};

export default Cart