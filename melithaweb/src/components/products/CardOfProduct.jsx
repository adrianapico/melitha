import React, {useState} from 'react';
import ModalProduct from './ModalProduct';
import Card from 'react-bootstrap/Card';

// import ProductCharacteristic from './ProductCharacteristic';

function CardOfProduct (props) {

    const {allproducts} = props;
 
    return (

        <Card >
            <Card.Img src ={allproducts.imgPostre} alt={allproducts.namePostre} />
            <Card.Body>
                <Card.Title>{allproducts.namePostre} </Card.Title>
                <Card.Subtitle>
                    ${allproducts.priceMinPostre} - ${allproducts.priceMaxPostre}
                </Card.Subtitle>
                <ModalProduct/>
            </Card.Body>
        </Card>

  );

};

export default CardOfProduct;