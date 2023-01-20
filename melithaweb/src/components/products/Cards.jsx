import React from 'react'
import CardOfProduct from './CardOfProduct'
import { Row, Col } from 'react-bootstrap'

function Cards() {
  return (
    <Row xs={2} md={2}  className="g-2">
      {Array.from({ length: 8}).map((_, idx) => (
        <Col  >
          <CardOfProduct key={idx} />
        </Col>
      ))}
    </Row>


    // <div className='container d-flex jutify-content-center'>
        
    //     <div className='row'>
    //         <div className='col-md-4'>
    //             <CardOfProduct/>    
    //         </div>
    //         <div className='col-md-4'>
    //             <CardOfProduct/>    
    //         </div>
    //         <div className='col-md-4'>
    //             <CardOfProduct/>    
    //         </div>
    //         <div className='col-md-4'>
    //             <CardOfProduct/>    
    //         </div>
               

    //     </div>
   
    // </div>
  )
}

export default Cards