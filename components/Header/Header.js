import React from 'react'
import Logo from '../Logo/Logo'
import Navbar from './Nav'

const Header = () => {
  return (
    <div className='flex flex-col'>
        <div className=' hidden md:flex px-[4rem] justify-between pt-4'>
            <div className=' flex   w-[18rem] py-2 h-[4.9rem]'>
            <Logo wRatio={""}/>
            </div>
            <div className='flex  justify-center  gap-5'>
                <div className='flex flex-col'>
                    <h1 className='text-slate-400'>Call us on</h1>
                    <h1 className='font-semibold'>(+91) 7355147501</h1>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-slate-400'>Office Opened </h1>
                    <h1 className='font-semibold'>10am to 6pm Sun <span className='text-slate-400'>Off</span></h1>
                </div>
            </div>
        </div>
            <Navbar/>
    </div>
  )
}

export default Header