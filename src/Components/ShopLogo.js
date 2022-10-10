import React from 'react'
import '../Style/ShopLogo.css'
import Shop1 from '../Photos/Shop1.jpg'
import {Card, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
function ShopLogo() {

//   return (
//         <div className='im'>
//             <div className='d-flex flex-column align-items-center justify-content-center text-info'>
//                 <h1 className='fw-bolder'>Shop</h1>
//                 <h3><span className='text-white'>Home</span>/Shop</h3>
//             </div>
//         </div>
//   )

  
  return (

        <Card inverse className='border border-0'>
            <CardImg alt="logo image"src={Shop1}  />
            <CardImgOverlay className='d-flex flex-column align-items-center justify-content-center text-info'>
                <CardTitle tag="h1" className='fw-bolder tx'>Shop</CardTitle>
                {/* <CardText  tag="h3"><span className='text-white tx'>Home</span>/Shop</CardText> */}
                <CardText tag="h4"  className='text-info '>
                <Link className='text-white text-decoration-none ' to='/' >Home</Link>  
                /
                <Link className='text-info text-decoration-none' to='/Shop' >Shop</Link>  
                </CardText>
            </CardImgOverlay>
        </Card>
        )
        
}
export default ShopLogo;