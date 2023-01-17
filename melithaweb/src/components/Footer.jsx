import React from 'react'

const Footer = () => {
  return (
    <div>Footer

    ESTO PERTENECE AL Navbar
    <nav className='navbar text-red-500 relative flex'>
            <div className='container-fluid'>
                <Link to="Products">Products</Link>
                <Link to="/Home">Home</Link>
                <Link to="/Melitha">Melitha</Link>
                <Link to="/Cart">Cart</Link>

                {/* <p onClick={()=>setIsOpen(!isOpen)}>BurgerMenu</p> */}

            </div>
        </nav>  </div>
  )
}

export default Footer