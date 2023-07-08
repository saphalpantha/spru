import React from 'react'

const Card = ({img,title }) => {
  return (
    <div className='group overflow-hidden relative'>
        <div className='group-hover:bg-green-400 shadow-lg h-[100%] w-full absolute z-10 group-hover:opacity-95 duration-150 ease-in'>
          
        </div>
        <img className='w-[100%] h-[100%] group-hover:scale-150  transition-all duration-30   0' src={img}></img>
        <h1 className='text-white  text-xl font-semibold hidden group-hover:block absolute bottom-2 left-2 z-10'>{title}</h1>
    </div>
  )
}

export default Card