import React from 'react'
import { IoMdMail } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineHealthAndSafety } from "react-icons/md"
import { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import medicotechlogo from '../Assets/images/newlogo.png'
    
   
    
const Footer = () => {
    const [email,setEmail] = useState()
  
   
  return (
    <div>
 <div className=' bg-primary  '>
    
<div className='    pb-10   bg-no-repeat '>
    <div className=''>
    <div className='flex flex-col  justify-center'>
    <h1 className='text-2xl md:text-5xl lg:pt-16 pt-4  lg:tracking-wider text-white font-bold text-center'> Get in Touch With Us</h1>
   <p className='text-center text-xs px-12 lg:pb-12 md:text-lg font-semibold text-white pt-4'> See our contact page for more information </p>
        

    </div>
        <div className=' px-2 lg:pb-12 md:px-6 grid gap-3  lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 grid-rows-3  pt-10 lg:gap-3 '>
            <div className=' flex-col lg:flex-row items-center  justify-center flex rounded-lg  py-8   lg:min-w-xl bg-white lg:h-44'>
           
            <div className='px-4'>
            <div className= 'hover:scale-110  duration-300 transition-transform  text-white  hover:bg-secondary w-24  flex justify-center h-24 rounded-full pt-2 bg-primary '>
            <IoLocationOutline color='white' size={72}/>
            </div>
            </div>

            <div className='flex items-center pt-4 text-center   flex-col '>
             <h1 className='text-2xl pb-4 text-primary font-bold ' > Head Office</h1>
             <div className='flex lg:flex-col'>
             <p className='text-sm'> 5900 Balcones Drive, STE 100</p>
             <p className='text-sm'>Austin, TX 78731</p>
             </div>
           

            </div>
            

            </div>
            <div className='bg-white flex-col lg:flex-row items-center lg:min-w  justify-center  flex rounded-lg  py-8 lg:pr-10 lg:h-44'>
            <div className='px-4'>
            <div className=  'hover:scale-110  duration-300 transition-transform  text-white  hover:bg-secondary w-24  flex justify-center h-24 rounded-full pt-4 bg-primary '>
            <IoMdMail color='white' size={64}/>
            </div>
            </div>
            
          
            <div className='flex items-center pt-4   flex-col '>
             <h1 className='text-2xl pb-4 font-bold text-primary ' > Email Us</h1>
            
             <p className='text-sm'> info@medicotechllc.com</p>
             {/* <p className='text-sm'> </p> */}
             
          

            </div>
            

            </div>
            <div className='bg-white flex-col lg:flex-row items-center lg:min-w justify-center  flex rounded-lg  py-8 lg:pr-16 lg:h-44'>
            <div className='px-4'>
            <div className= ' hover:scale-110  duration-300 transition-transform  text-white  hover:bg-secondary w-24 flex justify-center  h-24 rounded-full pt-4 bg-primary '>
            <FaPhoneAlt  size={56}/>
            </div>
            </div>
            <div className='flex items-center pt-4 flex-col '>
             <h1 className='text-2xl pb-4 text-primary font-bold' > Call Us</h1>
             <p> 11223344556677</p>
             <p> 88776611223344</p>

            </div>
            

            </div>
        </div>
        
    </div>
</div>


</div>
{/* <div className='flex bg-white justify-center p-2 lg:p-6'>
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
</div> */}

<div className='flex-col flex md:flex-row space-y-3 md:space-y-0  md:px-10 py-4'>
              <div className='flex md:w-1/3  text-primary font-bold gap-2 items-center '>
              
              <img src={medicotechlogo} alt='logo'/>
              </div>
              <div className='flex-col md:w-1/3 gap-4 px-2 text-primary  items-center '>
                <h1 className='text-xl font-bold md:text-left text-center pb-6'> Main Menu</h1>
          <div className='flex gap-2 items-center'><IoChevronForward />     <h1 className='cursor-pointer py-1'> Home</h1></div>
          <div className='flex gap-2 items-center'><IoChevronForward />    <NavLink to='/topBenefits'>   <h1 className='cursor-pointer py-1'> About Us</h1> </NavLink>  </div>  
                <div className='flex gap-2 items-center'><IoChevronForward />     <h1 className='cursor-pointer py-1'> Services</h1></div>
            <div className='flex gap-2 items-center'><IoChevronForward /> <NavLink   to='/specialities' > <h1 className='cursor-pointer py-1'> Specialities</h1></NavLink>   </div>       
           <div className='flex gap-2 items-center'><IoChevronForward />  <NavLink to={'/contact'}> <h1 className='cursor-pointer py-1'> Contact</h1> </NavLink>  </div>
            
          
                
                
               
              </div>
              <div className=' items-flex-col md:w-1/3 gap-4 px-2 text-primary  items-center'>
              <h1 className='text-xl font-bold  text-center md:text-left pb-6'> Contact Us</h1>
               <div className='flex gap-2 items-center '> <IoLocationOutline />   <h1 className='py-1'> 5900 Balcones Drive, STE 100 Austin, TX 78731</h1> </div>
              <div  className='flex gap-2 items-center'> <FaPhoneAlt /> <h1  className='py-1'> 0313 21313312</h1></div>
                <div className='flex gap-2 items-center'><IoMdMail/>  <h1  className='py-1'> info@medicotechllc.com</h1></div>
               
              </div>
            </div>


{/* <p className='bg-white py-8 md:pt-0 md:px-0 px-6 pt-2 text-sm md:text-md text-center '> © 2024 MEDICOTECH. All rights reserved.</p> */}

    </div>
   
  )
}

export default Footer 