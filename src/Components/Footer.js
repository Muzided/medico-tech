import React from 'react'
import { IoMdMail } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='min-h-screen bg-[#0C5C24] '>
        <div className='bg-mem3 flex justify-center   bg-no-repeat min-h-screen'>
            <div>
                <h1 className='text-5xl pt-44 tracking-wider text-white font-bold text-center'> Get in Touch With Us.</h1>
                <p className='text-center font-semibold text-white pt-4'>Metus class pulvinar blandit nec sodales posuere amet odio aptent</p>
                <div className='flex pt-10 gap-12 '>
                    <div className='bg-white flex rounded-lg  py-8  pr-20 h-44'>
                   
                    <div className='px-4'>
                    <div className= ' w-24 flex justify-center h-24 rounded-lg pt-2 bg-[#0C5A23] '>
                    <IoLocationOutline color='white' size={72}/>
                    </div>
                    </div>

                    <div className='flex flex-col'>
                     <h1 className='text-2xl pb-4 text-[#0C5A23] font-bold ' > Head Office</h1>
                     <p> Islamabad DHA</p>
                     <p> 22 - Khyber 1D</p>

                    </div>
                    

                    </div>
                    <div className='bg-white flex rounded-lg  py-8  pr-20 h-44'>
                    <div className='px-4'>
                    <div className= ' w-24 flex justify-center h-24 rounded-lg pt-2 bg-[#0C5A23] '>
                    <IoMdMail color='white' size={72}/>
                    </div>
                    </div>
                    
                  
                    <div className='flex flex-col'>
                     <h1 className='text-2xl pb-4 font-bold text-[#0C5A23] ' > Email Us</h1>
                     <p> dummyemail@gmail.com</p>
                     <p> dummyemail@gmail.com</p>

                    </div>
                    

                    </div>
                    <div className='bg-white flex rounded-lg  py-8  pr-20 h-44'>
                    <div className='px-4'>
                    <div className= ' w-24 flex justify-center h-24 rounded-lg pt-2 bg-[#0C5A23] '>
                    <FaPhoneAlt  color='white' size={72}/>
                    </div>
                    </div>
                    <div className='flex flex-col'>
                     <h1 className='text-2xl pb-4 text-[#0C5A23] font-bold' > Call Us</h1>
                     <p> 11223344556677</p>
                     <p> 88776611223344</p>

                    </div>
                    

                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer 