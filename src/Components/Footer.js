import React from 'react'
import { IoMdMail } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from 'react';
import { MdOutlineHealthAndSafety } from "react-icons/md"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import Menu1 from '../Components/Home/Menus/Menu1';
import Menu2 from '../Components/Home/Menus/Menu2';
import Menu3 from '../Components/Home/Menus/Menu3';
    
   
    
const Footer = () => {
    const [email,setEmail] = useState()
    const [menu1,setMenu1] = useState(false)
    const [menu2,setMenu2] = useState(false)
    const [menu3,setMenu3] = useState(false)
    
    const handleMenu1=()=>{  setMenu1(!menu1)}
    const handleMenu2=()=>{  setMenu2(!menu2)}
    const handleMenu3=()=>{  setMenu3(!menu3)}
  return (
    <div className=' bg-[#0C5C24]  '>

        <div className='bg-mem3 flex justify-center pb-10  bg-no-repeat '>
            <div>
                <h1 className='text-5xl pt-44 tracking-wider text-white font-bold text-center'> Get in Touch With Us.</h1>
                <p className='text-center font-semibold text-white pt-4'>Metus class pulvinar blandit nec sodales posuere amet odio aptent</p>
                <div className='flex pt-10 gap-12 '>
                    <div className='bg-white flex rounded-lg  py-8  pr-20 h-44'>
                   
                    <div className='px-4'>
                    <div className= 'hover:scale-110  duration-300 transition-transform  text-white  hover:bg-[#229631] w-24 flex justify-center h-24 rounded-full pt-2 bg-[#0C5A23] '>
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
                    <div className=  'hover:scale-110  duration-300 transition-transform  text-white  hover:bg-[#229631] w-24 rounded-full flex justify-center h-24  pt-4 bg-[#0C5A23] '>
                    <IoMdMail color='white' size={64}/>
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
                    <div className= ' hover:scale-110  duration-300 transition-transform  text-white  hover:bg-[#229631] w-24 flex justify-center  h-24 rounded-full pt-4 bg-[#0C5A23] '>
                    <FaPhoneAlt  size={56}/>
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
        <div className='flex bg-white justify-center p-6'>
                 <div className=' shadow-2xl rounded-xl bg-img2 -bg-cover w-4/6  pt-16 p-20 flex flex-col'>
                 <h1 className=' text-5xl font-bold  text-white text-center  '> Sign Up For Our Newsletter.</h1>
                 <p className='text-center pt-4 pb-6 font-bold text-white'> Get Weekly Updates on the latest news in Medical Services</p>
                    <div className='flex gap-4'>
                        <input className='border-2 rounded-lg bg-[#DEFFEC] px-2 py-2 w-4/6' type='text' placeholder='Type here' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                  <div className='text-white font-bold tracking-widest text-center cursor-pointer hover:bg-[#229631] rounded-lg bg-[#0C5C24] py-4 px-8 w-1/3'>
                  <button>
                    Subscribe
                   </button>
                  </div>
                  
                    </div>
                 </div>
        </div>

        <div className='bg-white '>
        <div className=' flex gap-2 justify-center pt-10 items-center'>
        <MdOutlineHealthAndSafety color='green' size={44}/>
        <h1 className=' font-bold text-2xl'>
           MEDICOTECH
        </h1>
        </div>
        <h1 className='text-lg text-center pl-12 tracking-widest pt-2'>MEDICAL SERVICE AND CLINIC</h1>
        </div>
        <div className='flex justify-center gap-10 bg-white  text-[#229631] py-6'>
        <FaFacebook size={32}  className='cursor-pointer hover:text-[#37A045]'/>
        <FaTwitter  size={32} className='cursor-pointer hover:text-[#37A045]'/>
        <FaInstagram  size={32} className='cursor-pointer hover:text-[#37A045]'/>
        </div>
        <div className='bg-white flex justify-center py-6 gap-12 text-[#229631] '>
               <h1 className='text-cGreen font-bold text-sm tracking-wider  hover:text-[#21C063]  border-white border-b-2 hover:border-[#21C063] cursor-pointer py-4'>Home</h1>
               <div onMouseEnter={handleMenu1} onMouseLeave={handleMenu1}  className='flex-col  space-y-5'>   
   <div  className=' flex items-center gap-2 text-cGreen hover:text-[#21C063] border-white border-b-2 hover:border-[#21C063]' >
    <h1  className=' font-bold text-sm tracking-wider   cursor-pointer py-4'>About Us</h1>
  <FaCaretDown  />
  </div>

  {menu1? <Menu1 className="" />:null}
  </div>
  <div   onMouseEnter={handleMenu2} onMouseLeave={handleMenu2} className='flex-col  space-y-5'>
  <div className=' flex items-center gap-2  text-cGreen hover:text-[#21C063]  border-white border-b-2 hover:border-[#21C063]' >
  <h1 className=' font-bold text-sm tracking-wider  cursor-pointer py-4'>Services</h1>
  <FaCaretDown  />
  </div>
  {menu2? <Menu2 className="" />:null}
  </div>  

  <h1 className='text-cGreen font-bold text-sm tracking-wider  hover:text-[#21C063]  border-white border-b-2 hover:border-[#21C063] cursor-pointer py-4'> Contact </h1>
  <div  onMouseEnter={handleMenu3}  onMouseLeave={handleMenu3} className='flex-col  space-y-5'>
 <div  className=' flex items-center gap-2  text-cGreen hover:text-[#21C063]  border-white border-b-2 hover:border-[#21C063]' >
  <h1 className=' font-bold text-sm tracking-wider  cursor-pointer py-4'>Page</h1>
  <FaCaretDown />
  </div>
  {menu3? <Menu3 className="" />:null}
 </div>


        </div>
        <p className='bg-white md:text-center pb-10'> © 2023 MEDICOTECH. All rights reserved. Powered by MoxCreative</p>

    </div>
  )
}

export default Footer 