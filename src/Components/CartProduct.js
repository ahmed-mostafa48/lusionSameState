import React from 'react'
import { Card, CardBody ,CardText, CardImg } from 'reactstrap';
import {AiOutlineMinus, AiOutlinePlus, AiTwotoneDelete } from "react-icons/ai";
import '../Style/CartProduct.css'



function CartProduct(props) {
    // console.log(props.shopedProduct);

  return (
    <Card style={{width: '15rem'}} className=' bg-info col-lg-4 col-md-4 col-sm-6 col-10 ' >

    <CardBody className=' d-flex flex-column align-items-center justify-content-around text-dark'>
        <CardImg alt="photo" src={props.shopedProduct.photo}  style={{width: '9rem'}} className='cart-img' />
        <CardText tag="h5" className='cart-tex' >Name : {props.shopedProduct.type}</CardText>
        <CardText tag="h5" className={ props.shopedProduct.avalibale > 0 ? 'text-success cart-tex' : 'text-danger cart-tex'} >In stock : {props.shopedProduct.avalibale}</CardText>
        <CardText tag="h5" className='cart-tex' >Price : {props.shopedProduct.price}$</CardText>
        <CardText tag="h5" className='cart-tex' >Count : {props.shopedProduct.count}</CardText>
        <div className='ics'>
            {/* <AiOutlinePlus className='fs-3 text-success bg-light rounded-circle me-3 cart-ic' onClick={()=>props.addProduct(props.shopedProduct)} style={{cursor:'pointer'}}/>
            <AiOutlineMinus className='fs-3 text-warning bg-light rounded-circle me-3 cart-ic'  onClick={()=>props.decrementProduct(props.shopedProduct)}  style={{cursor:'pointer'}}/>
            <AiTwotoneDelete className='fs-3 text-danger bg-light rounded-circle cart-ic' onClick={()=>props.removeProduct(props.shopedProduct)} style={{cursor:'pointer'}}/> */}

            <AiOutlinePlus className='fs-3 text-success bg-light rounded-circle me-3 cart-ic' onClick={()=>props.addProduct(props.shopedProduct)} />
            <AiOutlineMinus className='fs-3 text-warning bg-light rounded-circle me-3 cart-ic'  onClick={()=>props.decrementProduct(props.shopedProduct)}  />
            <AiTwotoneDelete className='fs-3 text-danger bg-light rounded-circle cart-ic' onClick={()=>props.removeProduct(props.shopedProduct)} />
        
        
        </div>
    </CardBody>







    </Card>
               
)
}

export default CartProduct;