import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, Container ,Button} from 'reactstrap'

import f1 from '../Photos/f1.png'
import '../Style/OffersSection.css'

 function OffersSection() {

  const navigate = useNavigate()


  return (
    <Container>
        <div className='d-flex align-items-center justify-content-between mt-5 main ' >
          
          <Card inverse className='bg-warning first'  style={{width:'65%' , height:'400px' ,backgroundColor:'palevioletred'}} > 
            <CardImg alt="Card image cap" src={f1} className='h-100' />
             <CardImgOverlay className='d-flex flex-column align-items-center justify-content-end text-dark'>
                <CardTitle className='fw-light' tag="h1" >MERRY</CardTitle>
                <CardText className='fw-bolder chr' tag="h1" >Christmas 40% off</CardText>
                <Button color="dark" outline  size="sm" className='sh1'  onClick={()=>navigate('/Shop')}  >Shop Now</Button>
             </CardImgOverlay>
          </Card>


          <Card inverse className='bg-warning second' style={{width:'25%' ,height:'400px',backgroundColor:'palevioletred'}}> 
             <CardImgOverlay  className='d-flex flex-column align-items-center justify-content-between text-dark'>
              <div  >
                <CardText className='fw-light' tag="h1">Your</CardText>
                <CardText className='fw-light' tag="h1">Next</CardText>
              </div>
              <div>
                <CardText className='fw-bolder pur' tag= "h1"  >Purachase</CardText>
                <CardText className='fw-bolder pur' tag="h1">10% off</CardText>
              </div>
              <Button color="dark" outline  size="sm" className='sh2'  onClick={()=>navigate('/Shop')}  >Shop Now</Button>

             </CardImgOverlay>
          </Card>
          
        </div>
    </Container>
  )
}




export default OffersSection;