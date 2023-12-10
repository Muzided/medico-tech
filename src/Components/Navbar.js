import React from 'react'
import { useState } from 'react';
import { LuMenuSquare } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineHealthAndSafety } from "react-icons/md"
import DropDown from './DropDown';
import Menu1 from './Menu1';
import Menu2 from './Menu2';
import Menu3 from './Menu3';
const Navbar = () => {
    const [menu,setMenu] = useState(false)
 
   const handleMenu=()=>{
    setMenu(!menu)
    console.log(menu)
        
   }
   const [menu1,setMenu1] = useState(false)
   const [menu2,setMenu2] = useState(false)
   const [menu3,setMenu3] = useState(false)
  
   const handleMenu1=()=>{  setMenu1(!menu1)}
   const handleMenu2=()=>{  setMenu2(!menu2)}
   const handleMenu3=()=>{  setMenu3(!menu3)}

    return (
        <div> 
        <div className='lg:hidden border-b-2 border-black/10 '>
        <div className='px-4 py-4 text-lg items-center flex justify-between'>
        <div className=' flex gap-2 items-center'>
        <MdOutlineHealthAndSafety color='green' size={44}/>
        <h1 className=' font-bold text-lg'>
           MEDICOTECH
        </h1>
        </div>
        
         {menu? <RxCross2 size={32} onClick={handleMenu} />:<LuMenuSquare size={32} onClick={handleMenu}/>} 
         
        
        </div>
           {menu? <DropDown  /> : null }
            </div>
<div  className='hidden   h-[70px] lg:block'>
  <div className=' px-14 text-lg items-center   flex justify-between' >
  <div className=' flex gap-2 items-center '>
        <MdOutlineHealthAndSafety color='green' size={44}/>
        <h1 className=' font  -bold text-lg'>
           MEDICOTECH
        </h1>
        </div>
            

<div className='flex gap-10 items-center  '>
            <h1 className='text-cGreen font-bold text-sm tracking-wider  hover:text-[#21C063]  border-white border-b-2 hover:border-[#21C063] cursor-pointer  py-6'><a href='/'> Home</a> </h1>
    <div onMouseEnter={handleMenu1} onMouseLeave={handleMenu1}  className='flex-col  space-y-5'>   
   <div  className=' flex items-center gap-2 text-cGreen hover:text-[#21C063] border-white border-b-2  hover:border-[#21C063]' >
    <h1  className=' font-bold text-sm tracking-wider   cursor-pointer py-6'>About Us</h1>
  <FaCaretDown  />
  </div>
  {menu1? <Menu1 className="" />:null}
</div>
        
  <div   onMouseEnter={handleMenu2} onMouseLeave={handleMenu2} className='flex-col  space-y-5'>
  <div className=' flex items-center gap-2  text-cGreen hover:text-[#21C063]  border-white border-b-2 hover:border-[#21C063]' >
  <h1 className=' font-bold text-sm tracking-wider  cursor-pointer py-6'>Services</h1>
  <FaCaretDown  />
  </div>
  {menu2? <Menu2 className="" />:null}
  </div>   
  <h1 className='text-cGreen font-bold text-sm tracking-wider  hover:text-[#21C063]  border-white border-b-2 hover:border-[#21C063] cursor-pointer  py-6'><a href='/specialities'>Specialities</a> </h1>
   <h1 className='text-cGreen font-bold text-sm tracking-wider  hover:text-[#21C063]  border-white border-b-2 hover:border-[#21C063] cursor-pointer py-6'><a href='/contact'>Contact </a> </h1>
 <div  onMouseEnter={handleMenu3}  onMouseLeave={handleMenu3} className='flex-col  space-y-5'>
 <div  className=' flex items-center gap-2  text-cGreen hover:text-[#21C063]  border-white border-b-2 hover:border-[#21C063]' >
  <h1 className=' font-bold text-sm tracking-wider  cursor-pointer py-6'>Page</h1>
  <FaCaretDown />
  </div>
  {menu3? <Menu3 className="" />:null}
 </div>
 
  <div className='bg-[#0C5A23] px-6 py-2 rounded-md text-white hover:bg-[#21C063] font-semibold'>
    <button className='tracking-wide text-md '><a href='/Appointment'>Book Appointment</a> </button>
  </div>
        </div>
        
  </div>

</div>
        </div>
   
    
  )
}

export default Navbar