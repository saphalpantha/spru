import React from 'react'
import Image from 'next/image'
const Card = ({img, title,desc}) => {
  return (
    <div className='flex gap-5 justify-between justify-center'>
        <div className={`]${title === 'Contact' ?  'w-[5rem] h-[3.5rem]' : ' w-1/2  h-[3.5rem]'} overflow-hidden`}>
            <Image className='w-[100%] h-[100%]' src={img} width={50} height={50} />
        </div>
        <div className='flex flex-col gap-2'>
            <h1 className='text-2xl'>{title}</h1>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default Card