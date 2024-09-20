import React from 'react'
import { NavLink } from 'react-router-dom'

const Talk = () => {
  return (
    <div className='bg-white flex justify-center gap-20 md:py-20 py-10 px-6 flex-col md:flex-row  '>
      <div className='flex-col flex md:gap-6 gap-3 lg:gap-10 px-4'>
        <h1 className='lg:text-6xl md:text-3xl text-xl text-center text-black/80 font-bold'> Get An Experts Opinion Right Now</h1>
        <p className='text-black/80 md:tracking-wide text-center tracking-normal lg:tracking-widest'> Connect for a consultation and discover tailored solutions to meet your billing/credential needs.</p>
      </div>
      <div className='md:flex flex justify-center md:w-1/3 lg:w-fit  '>
        <div className='bg-gradient-to-tr from-primary to-secondary shadow-lg lg:px-6 md:px-4  px-2 py-4 flex justify-center rounded-lg text-white  font-semibold'>
          <button className='tracking-wide  text-lg '><NavLink to={"/contact"}> Talk with An Expert</NavLink></button>
        </div>

      </div>


    </div>
  )
}

export default Talk