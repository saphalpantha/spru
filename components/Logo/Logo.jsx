import React from 'react'

const Logo = ({wRatio}) => {
  return (
    <div className={`w-${wRatio}`}>
        <img className='w-[100%] h-[100%]' src="https://www.spruproducts.in/images/logo.png"></img>
    </div>
  )
}

export default Logo