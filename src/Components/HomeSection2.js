import React from 'react'
import { Container } from 'reactstrap';
import '../Style/HomeSection2.css'

function HomeSection2(props) {

    // console.log(props.homeProducts2);

  return (
    <Container className='mt-5'>
        <div className='row d-flex  justify-content-center justify-content-lg-start justify-content-md-center justify-content-sm-center  align-items-center'>
            {props.homeProducts2.map((p)=>(
                <div key={p.id} className='col-lg-4 col-md-5 col-sm-7 col-11 '  >
                    <img src={p.photo} alt='' className='img-width' style={{width:'20rem'}}/>
                    <h2 className='type-tx'>{p.type}</h2>
                    <h2>items {p.items}</h2>

                </div>
            ))}
        </div>
    </Container>
  )
}

export default HomeSection2;
