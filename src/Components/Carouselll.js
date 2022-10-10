import React from 'react'
import { UncontrolledCarousel } from 'reactstrap';
import '../Style/Carouselll.css'
import logoOne from '../Photos/logoOne.png'
import logoTwo from '../Photos/logoTwo.png'

function Carouselll() {
  return (
    <div className='carousel-back'>
        <UncontrolledCarousel className=' bg-danger '
            items={[
                {
                altText: 'Slide 1',
                key: 1,
                src: logoOne,
                caption: ''
                },
                {
                altText: 'Slide 2',
                key: 2,
                src: logoTwo,
                caption: ''
                },
                {
                  altText: 'Slide 1',
                  key: 3,
                  src: logoOne,
                  caption: ''
                  },
                  {
                  altText: 'Slide 2',
                  key: 4,
                  src: logoTwo,
                  caption: ''
                  },

            ]} />


   

    </div>
  )
}

export default Carouselll;




