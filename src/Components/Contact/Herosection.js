import React from 'react'
import { TfiHome } from "react-icons/tfi";
import { IoIosArrowForward } from "react-icons/io";
const Herosection = () => {
  return (
    
 <div className=' bg-gradient-to-r from-[#0D6228] to-[#1EB059] '>
 <div className=' md:bg-img3  bg-no-repeat'>
    <div className='flex flex-col items-center'>
        <h1 className='text-7xl text-white font-bold pt-20'> Contact</h1>
        <div className='flex items-center gap-4 pb-20 text-white font-semibold pt-8 justify-evenly  '>
        <TfiHome />
        <p>Home</p>
        <IoIosArrowForward />
        <p>Contact</p>

        </div>
    </div>
    </div>
    </div>
   
   
  )
}

export default Herosection