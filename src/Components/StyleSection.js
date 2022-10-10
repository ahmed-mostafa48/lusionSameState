import React from 'react'
import { Container } from 'reactstrap';

import '../Style/StyleSection.css'

function StyleSection(props) {

    // console.log(props.styleProducts);
  return (
    <Container className='mt-5'>
        <div className='row d-flex justify-content-between flex-row ms-0 style-div'>

            <div className='row  images col-lg-6 col-md-6 col-sm-6 col-12  p-0 m-0' >
                {
                    props.styleProducts.map((sp)=>(
                        <img key={sp.id} src={sp.photo} alt='' className='col-lg-6 col-md-6 col-sm-6 col-6  p-0 m-0 ' />
                    ))
                }
            </div>






            <div  className='text d-flex justify-content-evenly flex-column col-lg-6 col-md-6 col-sm-6 col-12 text-style '>
                    <h1 className='font'>Vintage Style</h1>
                    <p className='paragraph'>Lorem ipsum is simply dummy text of printing and typeSetting industry.Lorem ipsum has been the industry's standard dummy text ever since the 1550s, when an unknown printer  </p>
                    <h1 className='font'>#Lusiontheme</h1>
            </div>




        </div>
    </Container>
  )
}


export default StyleSection;