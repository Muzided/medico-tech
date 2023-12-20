import React from 'react'
import { IoMdMail } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
const GoogleMap = () => {
  return (
    <div className='bg-mem5 hidden bg-no-repeat'>
        <div className='  lg:justify-center flex lg:pt-20 pb-6 md:pb-10 px-2 lg:pl-48'>
        <div className='flex bg-red-100 lg:px-12 lg:py-12 px-4 pb-8 pt-16  lg:w-2/5 bg-whit shadow-lg flex-col'>
             <h1  className='text-sm md:text-lg tracking-wider font-bold text-[#08485E] pb-2 md:pb-4'> BRANCH</h1>
             <h1 className='pb-2 text-2xl md:text-6xl font-bold    tracking-wide text-black/80'>
                Get in Direction
             </h1>
             <p className='text-[#88DDAB]'><span className=' text-[#1CA552] text-lg'>_______</span>__________________________________</p>
             <div className=' bg-white text-sm md:text-md md:pt-6 pt-4'>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
             </div>
             <div className='flex flex-col  gap-3 bg-white  text-[#0C5A23] pt-4 py-6'>
              <h1 className='font-bold text-black/80 text-lg'> Location1</h1>
                     <div className='flex items-center gap-5'>
                     <IoLocationOutline  size={20}/>
                     <p className='text-black'> Dummy Location</p>
                     </div>
                     <div className='flex items-center gap-5'>
                     <FaPhoneAlt  size={20}/>
                     <div className='flex flex-col'>
                     <p className='text-black'>123132131</p>
                     <p className='text-black'>123132131</p>
                     </div>
                     
                     </div>
                     <div className='flex items-center gap-5' >
                     <IoMdMail  size={20}/>
                     <div className='flex flex-col'>
                     <p className='text-black'>company@gmail.com</p>
                     <p className='text-black'>company@gmail.com</p>
                     </div>
                   
                     </div>
        </div>
        <div className='flex flex-col  gap-3 bg-white  text-[#0C5A23] pt-2 py-6'>
              <h1 className='font-bold text-black/80 text-lg'> Location2</h1>
                     <div className='flex items-center gap-5'>
                     <IoLocationOutline  size={20}/>
                     <p className='text-black'> Dummy Location</p>
                     </div>
                     <div className='flex items-center gap-5'>
                     <FaPhoneAlt  size={20}/>
                     <div className='flex flex-col'>
                     <p className='text-black'>123132131</p>
                     <p className='text-black'>123132131</p>
                     </div>
                     
                     </div>
                     <div className='flex items-center gap-5' >
                     <IoMdMail  size={20}/>
                     <div className='flex flex-col'>
                     <p className='text-black'>company@gmail.com</p>
                     <p className='text-black'>company@gmail.com</p>
                     </div>
                   
                     </div>
        </div>
             </div>
        </div>
    </div>
  )
}

export default GoogleMap