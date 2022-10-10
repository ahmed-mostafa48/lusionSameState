import React from 'react'
import { FaCartPlus } from 'react-icons/fa';
import { Card, CardBody ,CardText, Button, CardImg } from 'reactstrap';
import '../Style/ShopCard.css'


function ShopCard(props) {

  return (
    <Card style={{width: '15rem'}} className='  col-lg-4 col-md-4 col-sm-6 col-10  p-0' >
    <CardImg alt="photo" src={props.shopProduct.photo} top width="100%" />
        <CardBody className='card-b' >
            <div className='d-flex flex-column align-items-start justify-content-between'>
                <CardText tag="h6" className='text-muted' >{props.shopProduct.type}</CardText>
                <CardText tag="h6" className='text-dark fw-bolder' >{`$${(props.shopProduct.price).toFixed(2)}`}</CardText>
                <CardText tag="h6" className={ props.shopProduct.avalibale > 0 ? 'text-success av-tx' : 'text-danger av-tx'} >Avalibale : {props.shopProduct.avalibale}</CardText>
            </div>

            <div className='d-flex align-items-center justify-content-end bt'>
                <Button color="dark" outline onClick={()=>props.addProduct(props.shopProduct)} >
                <FaCartPlus /> 
                </Button>
            </div>

        </CardBody>
    </Card>
  )
}


export default ShopCard;