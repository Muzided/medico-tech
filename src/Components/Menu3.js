import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu3 = () => {
  return (
    <div className='flex flex-col px-4 md:p-4 md:bg-white md:py-4 gap-8  md:absolute md:top-[50px] md:shadow-lg md:rounded-sm '>
      <h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'>
        <NavLink to='/topBenefits'>Top Benefits With MedicoTech</NavLink>
      </h1>
      <h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'>
        <NavLink to='/blog'>Blog Page</NavLink>
      </h1>
      <h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'>
        <NavLink to='/faqs'>FAQ's</NavLink>
      </h1>


    </div>
  )
}

export default Menu3