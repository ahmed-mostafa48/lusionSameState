import React from 'react'
import { Button , Container } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import ShopCard from './ShopCard';
import ShopLogo from './ShopLogo';
import '../Style/Shop.css'

 function Shop(props) {

  const navigate = useNavigate()

  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
      {/* <div className='bg-dark text-white' > */}

      <ShopLogo />

      <Container className='my-5 row  d-flex justify-content-center align-items-center' style={{gap: '70px'}}>
      
        {props.shopProducts.map((shopProduct)=>(
            <ShopCard key={shopProduct.id} shopProduct={shopProduct} addProduct={props.addProduct} />
        ))}

      </Container>

        {/* <div className='d-flex align-items-center justify-content-center'> */}
      <Button color="light" outline    size="lg" className='b-home'  onClick={()=>navigate('/')}  >Back Home</Button>
      {/* </div> */}
      
    </div>
  )
}

export default Shop;
