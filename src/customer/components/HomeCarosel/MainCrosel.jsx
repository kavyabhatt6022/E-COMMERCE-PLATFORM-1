import React from 'react'
import { mainCarouselData } from './MainCaroselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCrosel = () => {
    const items = mainCarouselData.map((item)=> <img className='cursor-pointer -z-10' role='presentation' src={item.image} alt=''/>)

  return (
    <AliceCarousel
    items={items}  
    disableButtonsControls
    autoPlay
    autoPlayInterval={1500} //it is given in milli seconds
    infinite
/>
  )
}

export default MainCrosel;