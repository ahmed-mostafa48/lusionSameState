import React from 'react'
import { Container } from 'reactstrap';
import BestSellingCard from './BestSellingCard';
import '../Style/BestSellingSection.css'

function BestSellingSection(props) {
  return (

    <div className='mt-5'>   


        <h2 className='mb-3 ms-5 best-title'>Best Selling</h2>
        <div className='d-flex align-items-center justify-content-between direc'  >
            <Container>
                <div className='row  d-flex justify-content-center align-items-center' style={{gap: '20px'}}>
                {
                    props.bestSellProducts.map((p)=>(
                        <BestSellingCard key={p.id} product={p} />
                                            
                    ))
                }
                </div>
            </Container>
            
            {/* <h3 className='border border-2 border-danger text-center b' style={{rotate:'90deg',height:'80px',maxWidth: '130px'}} >All Products</h3> */}
            <div className='text-box'>
              <h3 className='border border-2 border-danger text-center best-sec-tx' >All Products</h3>
            </div>
        </div>



    </div>
  )
}


export default BestSellingSection;