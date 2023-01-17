import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PMaracuya from '../../assets/PMaracuya.jpg';
import PFrutosRojos from '../../assets/PFrutosRojos.jpg';

import PMilo from '../../assets/PMilo.jpg';
import PLimon from '../../assets/PLimon.jpeg';
import PBrownie from '../../assets/PBrownie.jpeg'
import POreo from '../../assets/POreo.jpg'



function CardOfProducts() {
  return (
    <div className='AllProducts'>
        <Card className='cardProduct' style={{ width: '50%' }}>
            <Card.Img variant="top" src={PMaracuya} />
            <Card.Body>
                <Card.Title>Postre de Maracuya</Card.Title>
                <Card.Text> $3.500 - $60.000 </Card.Text>
            </Card.Body>
        </Card>

        <Card className='cardProduct' style={{ width: '50%' }}>
            <Card.Img variant="top" src={PFrutosRojos} />
            <Card.Body>
                <Card.Title>Postre de Frutos Rojos</Card.Title>
                <Card.Text> $3.500 - $60.000 </Card.Text>
            </Card.Body>
        </Card>

        <Card className='cardProduct' style={{ width: '50%' }}>
            <Card.Img variant="top" src={POreo} /> 
            <Card.Body>
                <Card.Title>Postre de Oreo</Card.Title>
                <Card.Text> $3.500 - $60.000 </Card.Text>
            </Card.Body>
        </Card>

        <Card className='cardProduct' style={{ width: '50%' }}>
            <Card.Img variant="top" src={PMilo} />
            <Card.Body>
                <Card.Title>Postre de Milo</Card.Title>
                <Card.Text> $3.500 - $60.000 </Card.Text>
            </Card.Body>
        </Card>

        <Card className='cardProduct' style={{ width: '50%' }}>
            <Card.Img variant="top" src={PLimon} />
            <Card.Body>
                <Card.Title>Postre de Limon</Card.Title>
                <Card.Text> $3.500 - $60.000 </Card.Text>
            </Card.Body>
        </Card>

        <Card className='cardProduct' style={{ width: '50%' }}>
            <Card.Img variant="top" src={PBrownie} />
            <Card.Body>
                <Card.Title>Postre de Brownie</Card.Title>
                <Card.Text> $3.500 - $60.000 </Card.Text>
            </Card.Body>
        </Card>


        


        


        


    </div>
    
  );
}

export default CardOfProducts;