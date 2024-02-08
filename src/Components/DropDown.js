import React from 'react'
import Menu1 from './Menu1';
import Menu2 from '../Components/ServiceMenu/HealthMenu';
import Menu3 from './Menu3';
import { FaCaretDown } from "react-icons/fa";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const DropDown = () => {
 const [menu1,setMenu1] = useState(false)
 const [menu2,setMenu2] = useState(false)
 const [menu3,setMenu3] = useState(false)

 const handleMenu1=()=>{  setMenu1(!menu1)}
 const handleMenu2=()=>{  setMenu2(!menu2)}
 const handleMenu3=()=>{  setMenu3(!menu3)}

  return (
    <div className='flex border-t-2  border-black/10  '>
  <div className='flex flex-col py-2    px-4 gap-8'>
  <h1 className='text-primary font-bold text-sm'><NavLink href='/'>Home</NavLink> </h1>
  <div className=' text-primary flex items-center gap-2' onClick={handleMenu1}>
  <NavLink  to={'/topBenefits'}><h1 className='text-cGreen font-bold text-sm'>About Us</h1></NavLink> 
  {/* <FaCaretDown color="green" /> */}
  </div>
  {/* {  menu1? <Menu1/> : null} */}
  <div className=' flex text-primary items-center gap-2' onClick={handleMenu2}>
  <h1 className='text-cGreen font-bold text-sm'>Service</h1>
  <FaCaretDown  />
  </div>
  {  menu2? <Menu2/> : null}
  {/* <h1 className='text-cGreen font-bold text-sm'><a href='/contact'>Contact</a></h1>
  <div className=' flex items-center gap-2' onClick={handleMenu3}>
  <h1 className='text-cGreen font-bold text-sm'>Learn </h1>
  <FaCaretDown color="green" />
  </div>
  {  menu3? <Menu3/> : null} */}
   
 
    
    </div>
    </div>
  
  )
}

export default DropDown