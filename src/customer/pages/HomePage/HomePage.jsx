import React from 'react'
import MainCrosel from '../../components/HomeCarosel/MainCrosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../Data/mens_kurta'
import { women_dress } from '../../../Data/women_dress'
import { mens_shoes } from '../../../Data/shoes'
import { mens_jeans } from '../../../Data/mens_jeans'
import { men_shirt } from '../../../Data/men_shirt'
import {  women_tops } from '../../../Data/women_tops'

const HomePage = () => {
  return (
    <div>
        <MainCrosel/>

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 '>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCarosel data={mens_jeans} sectionName={"Men's Jeans"}/>
            <HomeSectionCarosel data={men_shirt} sectionName={"Men's Shirts"}/>
            <HomeSectionCarosel data={women_tops} sectionName={"Women's Tops"}/>
            <HomeSectionCarosel data={women_dress} sectionName={"Women's Dress"}/>
        </div>
    </div>
  )
}

export default HomePage;