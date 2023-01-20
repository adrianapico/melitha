import { Routes, Route, } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import Melitha from './pages/Melitha';
import Cart from './pages/Cart';
// import { Products, Home, Melitha, Cart } from './Pages'


function App ( ) {

  return (
    <div className="App">
      <Routes>
        {/* In the component "Route", I can add the path or the URL of the page that I want to the Link when a search de page */}
        <Route path ="/" element= {<Products/>} />
        <Route path ="/Home" element= {<Home/>} />
        <Route path ="/Products" element= {<Products/>} />
        <Route path ="/Melitha" element= {<Melitha/>} />
        <Route path ="/Cart" element= {<Cart/>} />
          
      </Routes>

     
    </div>
  )
};

// function Navigation() {
//   return <nav>

//   <ul>
//     <li >
//       <Link to ='/Products'>Products</Link>
//     </li>
//     <li >
//       <Link to ='/Home'>Home</Link>
//     </li>
//     <li >
//       <Link to ='/Melitha'>Melita</Link>
//     </li>
//     <li >
//       <Link to ='/Cart'>Cart</Link>
//     </li>

//   </ul>
//   </nav>
// }


export default App;
