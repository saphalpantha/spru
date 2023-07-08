import React from 'react'
import classes from './WhyUs.module.css'
import { WhyUsCard } from './WhyUsCard'


const data = [
  {i1:'i1', title:'CUTOMER SUPPORT', img:'https://www.spruproducts.in/images/icon/icon1.png', isSqr:true},
  {i1:'i2', title:'QUALITY', img:'https://www.spruproducts.in/images/icon/icon4.png', isSqr:false},
  {i1:'i3', title:'SAFETY & SECURITY', img:'https://www.spruproducts.in/images/icon/icon2.png', isSqr:true},
  {i1:'i4', title:'NETWORKING', img:'https://www.spruproducts.in/images/icon/icon5.png', isSqr:false},
  {i1:'i6', title:'CUSTOMER ENGAGMENT', img:'https://www.spruproducts.in/images/icon/icon3.png', isSqr:true},
  {i1:'i7', title:'DELIVERY', img:'https://www.spruproducts.in/images/icon/icon6.png', isSqr:false},
]



const WhyUs = () => {
  return (
    <div className={` bg-auto md:bg-fixed h-[90vh] md:h-[60vh] relative ${classes.main}`}>
        <div className='bg-green-500 opacity-90 h-full'>
                <div className='grid  absolute  left-[50%] translate-x-[-45%] md:translate-x-[-50%] w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:w-[90%]  h-full md:h-auto gap-15 md:gap-10  bottom-[-10%] md:bottom-[-20%]'>
                  {data.map(i => (
                    <WhyUsCard isSqr={i.isSqr} key={i.i1} src={i.img} title={i.title} id={i.i1}/>
                    ))}
                    </div>
        </div>
    </div>
  )
}

export default WhyUs