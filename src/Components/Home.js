import React from 'react'
import BestSellingSection from './BestSellingSection';
import Carouselll from './Carouselll';
import HomeSection2 from './HomeSection2';
import OffersSection from './OffersSection';
import StyleSection from './StyleSection';

function Home(props) {
  return (
    <div>
        <Carouselll  />
        <HomeSection2 homeProducts2={props.homeProducts2} />
        <BestSellingSection  bestSellProducts={props.bestSellProducts}  />
        <OffersSection />
        <StyleSection  styleProducts={props.styleProducts} />
    </div>
  )
}

export default Home;
