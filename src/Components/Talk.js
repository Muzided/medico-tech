import React from 'react'

const Talk = () => {
  return (
    <div className='bg-gradient-to-r flex justify-center gap-20 md:py-20 py-10 px-6 flex-col md:flex-row from-cGreen to-[#21C063] '>
    <div className='flex-col flex md:gap-6 gap-3 lg:gap-10 px-4'>
    <h1 className='lg:text-6xl md:text-3xl text-xl text-white font-bold'> Get An Experts Opinion Right Now</h1>
        <p className='text-white md:tracking-wide tracking-normal lg:tracking-widest'> Connect for a consultation and discover tailored solutions to meet your unique needs.</p>
    </div>
    <div className='md:flex flex justify-center md:w-1/3 lg:w-fit  '>
    <div className='bg-gradient-to-tr from-[#21C063] to-cGreen shadow-lg lg:px-6 md:px-4  px-2 py-4 flex justify-center rounded-lg text-white hover:bg-[#21C063] font-semibold'>
    <button className='tracking-wide  text-lg '><a href='/Appointment'> Talk with An Expert</a> </button>
  </div>
    </div>
    
         </div>
  )
}

export default Talk