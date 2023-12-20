import React from 'react'
import { IoMdMail } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";

    
   
    
const Footer = () => {
    const [email,setEmail] = useState()
  
   
  return (
    <div>
 <div className=' bg-[#0C5C24]  '>
    
<div className='bg-mem3  pb-10   bg-no-repeat '>
    <div className=''>
    <div className='flex flex-col  justify-center'>
    <h1 className='text-2xl md:text-5xl lg:pt-16 pt-4  lg:tracking-wider text-white font-bold text-center'> Get in Touch With Us</h1>
   <p className='text-center text-xs px-12 lg:pb-12 md:text-lg font-semibold text-white pt-4'> See our contact page for more information </p>
        

    </div>
        <div className=' px-2 lg:pb-12 md:px-6 grid gap-3  lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 grid-rows-3  pt-10 lg:gap-3 '>
            <div className=' flex-col lg:flex-row items-center  justify-center flex rounded-lg  py-8   lg:min-w-xl bg-white lg:h-44'>
           
            <div className='px-4'>
            <div className= 'hover:scale-110  duration-300 transition-transform  text-white  hover:bg-[#229631] w-24  flex justify-center h-24 rounded-full pt-2 bg-[#0C5A23] '>
            <IoLocationOutline color='white' size={72}/>
            </div>
            </div>

            <div className='flex items-center pt-4 text-center   flex-col '>
             <h1 className='text-2xl pb-4 text-[#0C5A23] font-bold ' > Head Office</h1>
             <div className='flex lg:flex-col'>
             <p className='text-sm'> Islamabad DHA</p>
             <p className='text-sm'> 22 - Khyber 1D</p>
             </div>
           

            </div>
            

            </div>
            <div className='bg-white flex-col lg:flex-row items-center lg:min-w  justify-center  flex rounded-lg  py-8 lg:pr-10 lg:h-44'>
            <div className='px-4'>
            <div className=  'hover:scale-110  duration-300 transition-transform  text-white  hover:bg-[#229631] w-24  flex justify-center h-24 rounded-full pt-4 bg-[#0C5A23] '>
            <IoMdMail color='white' size={64}/>
            </div>
            </div>
            
          
            <div className='flex items-center pt-4   flex-col '>
             <h1 className='text-2xl pb-4 font-bold text-[#0C5A23] ' > Email Us</h1>
            
             <p className='text-sm'> dummyemail@gmail.com</p>
             <p className='text-sm'> dummyemail@gmail.com</p>
             
          

            </div>
            

            </div>
            <div className='bg-white flex-col lg:flex-row items-center lg:min-w justify-center  flex rounded-lg  py-8 lg:pr-16 lg:h-44'>
            <div className='px-4'>
            <div className= ' hover:scale-110  duration-300 transition-transform  text-white  hover:bg-[#229631] w-24 flex justify-center  h-24 rounded-full pt-4 bg-[#0C5A23] '>
            <FaPhoneAlt  size={56}/>
            </div>
            </div>
            <div className='flex items-center pt-4 flex-col '>
             <h1 className='text-2xl pb-4 text-[#0C5A23] font-bold' > Call Us</h1>
             <p> 11223344556677</p>
             <p> 88776611223344</p>

            </div>
            

            </div>
        </div>
        
    </div>
</div>


</div>
<div className='flex bg-white justify-center p-2 lg:p-6'>
         <div className=' shadow-2xl rounded-xl bg-img2 -bg-cover md:w-4/6  pt-16 p-8 md:p-20 flex flex-col'>
         <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold  text-white text-center  '> Sign Up For Our Newsletter.</h1>
         <p className='text-center pt-4 pb-6 font-bold text-sm md:text-lg text-white'> Get Weekly Updates on the latest news in Medical Services</p>
            <div className='flex flex-col md:flex-row gap-4'>
                <input className='border-2 rounded-lg bg-[#DEFFEC] px-2 py-2  lg:w-4/6' type='text' placeholder='Type here' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <div className='text-white  font-bold tracking-widest text-center cursor-pointer hover:bg-[#229631] rounded-lg bg-[#0C5C24] py-4 px-4 md:py-4 md:px-8 md:w-1/3'>
          <button>
            Subscribe
           </button>
          </div>
          
            </div>
         </div>
</div>


<p className='bg-white py-8 md:pt-0 md:px-0 px-6 text-sm md:text-md text-center '> © 2023 MEDICOTECH. All rights reserved. Powered by MoxCreative</p>

    </div>
   
  )
}

export default Footer 