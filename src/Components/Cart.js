import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import CartProduct from './CartProduct';
import '../Style/Cart.css'
import { AiFillWarning } from 'react-icons/ai';


function Cart(props) {

      const navigate = useNavigate()

  
  return (
    <div className='d-flex flex-column align-items-center justify-content-between' >

     
{ props.showLength() > 0 ?

      <Container className=' mt-5'>


        <div className='row d-flex align-items-center justify-content-center'  style={{gap: '70px'}}>
        {
          props.shopProducts.map((shopProduct)=>(
            shopProduct.count > 0 && <CartProduct  key={shopProduct.id} shopedProduct={shopProduct}  addProduct={props.addProduct}  decrementProduct={props.decrementProduct} removeProduct={props.removeProduct} />
            
          ))
        }
        </div>

      
      </Container>

        :<div className='d-flex align-items-center text-danger mt-5 bg-white border border-1 border-danger p-2'>
            <AiFillWarning className='text-danger fs-1'/>
            <h1 className='swq'>Your Cart IS Empty</h1>
        </div>
  
      }



          {/* /////////way 1 by click on button////// */}


        <div className='d-flex justify-content-around align-items-center p-2 bg-info border border-1 border-info my-5 bt-total'>
          <Button color="light" outline className='me-2 tx-total' onClick={props.getTotal}>Get Total Price</Button>
          <h4 className='tx-total' >Total Price : {props.total}$</h4>
        </div>



          {/* /////////way 2 direct////// */}

          <div className=' p-2 bg-info border border-1 border-info my-5 bt-total'>
          <h4 className='tx-total' >Total Price : {props.getTotalPrice()}$</h4>
        </div>





        <Button className='bt-cart mb-5' color="light" outline size="lg" onClick={()=>navigate('/Shop')}  >Continue Shopping</Button>


          {/* <div  className='bg-dark'  style={props.showLength() == 0 ? {height: '247px'} : {height: '0'} }   ></div> */}
      
    </div>
  )
}


export default Cart;