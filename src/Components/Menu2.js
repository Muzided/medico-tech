import React,{useState} from 'react'
import HealthMenu from './ServiceMenu/HealthMenu'
import { FaCaretDown } from "react-icons/fa";
import CallMenu from './ServiceMenu/CallMenu';

const Menu2 = () => {
  const [menu1,setMenu1] = useState(false)
  const [menu2,setMenu2] = useState(false)
  const handleMenu1=()=>{  setMenu1(!menu1)}
  const handleMenu2=()=>{  setMenu2(!menu2)}
  return (
    <div className='flex flex-col md:bg-white px-4 gap-8 md:p-4 md:top-[50px] md:absolute md:shadow-lg md:rounded-sm '>
    <div className=''>
    <div className='flex items-center text-cGreen gap-2'>
    <h1 className='text-cGreen cursor-pointer  hover:text-[#21C063] font-bold text-sm' onClick={handleMenu1}> Health Services</h1>
    <FaCaretDown  />
    </div>
  
    { menu1? <HealthMenu/> : null}
    </div>
    <div className=''>
    <div className='flex items-center text-cGreen gap-2'>
    <h1 className='text-cGreen cursor-pointer  hover:text-[#21C063] font-bold text-sm' onClick={handleMenu2}> Tech Services</h1>
    <FaCaretDown  />
    </div>
  
    { menu2? <CallMenu/>: null}
    </div>
    </div>
  )
}

export default Menu2