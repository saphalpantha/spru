import React from 'react'
import Footer from '../Footer/Footer'
import Slide from '../Slider/Slide'
import Welcome from '../Welcome/Welcome'
import Industries from '../Industries/Industries'
import Products from '../Products/Products'
import Testimonials from '../Testimonials/Testimonials'
import WhyUs from '../WhyUs/WhyUs'


const MainPage = () => {
  return (
    <div>
        <Slide/>
        <Welcome/>
        <WhyUs/>
        <Products/>
        <Industries/>
        <Testimonials/>

    </div>
  )
}

export default MainPage