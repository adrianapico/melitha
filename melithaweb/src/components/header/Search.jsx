import React from 'react'
import { Nav } from 'react-bootstrap'
import { BsSearch } from "react-icons/bs";


const Search= () => {
  return (
    <Nav>
        {/* aqui estaria espendiente hacer modal donde se haga la busqueda */}

        <BsSearch color="#8C3503" fontSize={"25px"} />
    </Nav>
  );
};

export default Search