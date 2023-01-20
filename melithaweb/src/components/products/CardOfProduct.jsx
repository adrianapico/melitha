import React, {useState} from 'react';
import ModalProduct from './ModalProduct';
import Card from 'react-bootstrap/Card';
import PMaracuya from '../../assets/PMaracuya.jpg';
import PFrutosRojos from '../../assets/PFrutosRojos.jpg';
import PMilo from '../../assets/PMilo.jpg';
import PLimon from '../../assets/PLimon.jpeg';
import PBrownie from '../../assets/PBrownie.jpeg'
import POreo from '../../assets/POreo.jpg'
// import ProductCharacteristic from './ProductCharacteristic';

function CardOfProduct ( ) {

    const [ openModalProduct, setOpenModalProduct] = useState(false);

    const handleClose = () => setOpenModalProduct(false);
    const handleShow = () => setOpenModalProduct(true);
    

    return (
        <Card onClick={ handleShow} >
            <Card.Img variant="top" src= {PMaracuya} />
            <Card.Body>
            <Card.Title>Postre de Maracuya</Card.Title>
            <Card.Text>$3.500 - $60.000 </Card.Text>
            </Card.Body>

            <ModalProduct open={openModalProduct}  onClose={ handleClose} />

            {/* { modalProduct && <ProductCharacteristic />} */}
        </Card>             
            
  );

};

export default CardOfProduct;