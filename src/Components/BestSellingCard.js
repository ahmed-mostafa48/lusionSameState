import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, CardText } from 'reactstrap';
import '../Style/BestSellingCard.css'

function BestSellingCard(props) {
  
  const navigate = useNavigate()

  return (
    <Card style={{width: '15rem'}} className='p-0  col-lg-3 col-md-4 col-sm-6 col-6 '>
    <CardImg alt="photo" src={props.product.photo} />
        <CardBody className='text-muted'>
            {/* <CardText tag="h6" className='mb-2' style={{fontSize: '0.8rem'}}>{props.product.type}</CardText> */}
            <CardText tag="h6" className='mb-2 tx-best' >{props.product.type}</CardText>

            <div className='d-flex align-items-center justify-content-between best'>
            <CardText tag="h6" className='tx-best'>{`${(props.product.price).toFixed(2)}$`}</CardText>
            <Button color="dark" outline  size="sm"  onClick={()=>navigate('/Shop')}  >Shop Now</Button>
            </div>

        </CardBody>
    </Card>
  )
}


export default BestSellingCard;
