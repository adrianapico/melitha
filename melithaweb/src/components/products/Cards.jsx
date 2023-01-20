import React from 'react'
import CardOfProduct from './CardOfProduct'
import { Row} from 'react-bootstrap'

function Cards ( props ) {

  const { allproducts } = props;
  return (
    // with "md" you can define how row de screen can have.
    <Row xs={2} md={2}  className="g-2">

      {allproducts.map ((allproducts) => (
        <CardOfProduct key={ allproducts.id} allproducts={allproducts} />
      ))}


         {/* {Array.from({ length: 8}).map((_, idx) => (
          <Col  >
            <CardOfProduct key={idx} />
          </Col>
        ))}  */}
    </Row>


  );
}

export default Cards