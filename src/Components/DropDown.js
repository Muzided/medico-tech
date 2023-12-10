import React from 'react'
import Menu1 from './Menu1';
import Menu2 from './Menu2';
import Menu3 from './Menu3';
import { FaCaretDown } from "react-icons/fa";
import { useState } from 'react';
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
  <h1 className='text-cGreen font-bold text-sm'><a href='/'>Home</a> </h1>
  <div className=' flex items-center gap-2' onClick={handleMenu1}>
  <h1 className='text-cGreen font-bold text-sm'>About Us</h1>
  <FaCaretDown color="green" />
  </div>
  {  menu1? <Menu1/> : null}
  <div className=' flex items-center gap-2' onClick={handleMenu2}>
  <h1 className='text-cGreen font-bold text-sm'>Service</h1>
  <FaCaretDown  color="green"/>
  </div>
  {  menu2? <Menu2/> : null}
  <h1 className='text-cGreen font-bold text-sm'><a href='/contact'>Contact</a></h1>
  <div className=' flex items-center gap-2' onClick={handleMenu3}>
  <h1 className='text-cGreen font-bold text-sm'>Page</h1>
  <FaCaretDown color="green" />
  </div>
  {  menu3? <Menu3/> : null}
   
 
    
    </div>
    </div>
  
  )
}

export default DropDown