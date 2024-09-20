import React from 'react'
import { useState } from 'react';
import { LuMenuSquare } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineHealthAndSafety } from "react-icons/md"
import logoone from "../Assets/logoone.png"
import DropDown from './DropDown';
import Menu1 from './Menu1';
import Menu2 from '../Components/ServiceMenu/HealthMenu';
import Menu3 from './Menu3';
import medicotechlogo from '../Assets/images/newlogo.png'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
    console.log(menu)

  }
  const [menu1, setMenu1] = useState(false)
  const [menu2, setMenu2] = useState(false)
  const [menu3, setMenu3] = useState(false)

  const handleMenu1 = () => { setMenu1(!menu1) }
  const handleMenu2 = () => { setMenu2(!menu2) }
  const handleMenu3 = () => { setMenu3(!menu3) }

  return (
    <div>
      <div className='lg:hidden border-b-2 border-black/10 '>
        <div className='px-4 py-4 text-lg items-center flex justify-between'>
          <NavLink to={'/'}> <div className='text-primary flex gap-2 items-center'>
           <img src={medicotechlogo} alt='logo'/>
          </div>
          </NavLink>

          {menu ? <RxCross2 size={32} onClick={handleMenu} /> : <LuMenuSquare size={32} onClick={handleMenu} />}


        </div>
        {menu ? <DropDown /> : null}
      </div>
      <div className='hidden   h-[70px] lg:block'>
        <div className='  xl:px-14 text-lg items-center   flex justify-between' >
          <NavLink to={'/'}>  <div className=' text-primary flex gap-2 items-center '>
          <img src={medicotechlogo} alt='logo' className='max-w-[220px]'/>
          </div>
          </NavLink>


          <div className='flex  gap-6 xl:gap-10 items-center  '>
            <NavLink to={'/'}>    <h1 className='text-primary font-bold text-sm tracking-wider  hover:text-secondary  border-white border-b-2 hover:border-secondary cursor-pointer  py-6'>Home </h1></NavLink>
            <div onMouseEnter={handleMenu1} onMouseLeave={handleMenu1} className='flex-col  space-y-5'>
              <div className=' flex items-center gap-2 text-primary hover:text-secondary border-white border-b-2  hover:border-secondary' >
                <NavLink to={'/topBenefits'}><h1 className=' font-bold text-sm tracking-wider   cursor-pointer py-6'>About Us</h1>
                </NavLink>   {/* <FaCaretDown /> */}
              </div>
              {/* {menu1 ? <Menu1 className="" /> : null} */}
            </div>
           

            <div onMouseEnter={handleMenu2} onMouseLeave={handleMenu2} className='flex-col  space-y-5'>
              <div className=' flex items-center gap-2  text-primary hover:text-secondary  border-white border-b-2 hover:border-secondary' >
                <h1 className=' font-bold text-sm tracking-wider  cursor-pointer py-6'>Services</h1>
                <FaCaretDown />
              </div>
              {menu2 ? <Menu2 className="" /> : null}
            </div>
            <NavLink to={'/specialities'}>  <h1 className='text-primary font-bold text-sm tracking-wider  hover:text-secondary  border-white border-b-2 hover:border-secondary cursor-pointer  py-6'>Specialities </h1></NavLink>
            
            <NavLink to={'/contact'}> <h1 className='text-primary font-bold text-sm tracking-wider  hover:text-secondary  border-white border-b-2 hover:border-secondary cursor-pointer py-6'>Contact Us  </h1></NavLink>
            {/* <div onMouseEnter={handleMenu3} onMouseLeave={handleMenu3} className='flex-col  space-y-5'>
              <div className=' flex items-center gap-2  text-primary hover:text-[#21C063]  border-white border-b-2 hover:border-[#21C063]' >
                <h1 className=' font-bold text-sm tracking-wider  cursor-pointer py-6'>Learn</h1>
                <FaCaretDown />
              </div>
              {menu3 ? <Menu3 className="" /> : null}
            </div> */}

            {/* <div className='bg-primary px-6 py-2 rounded-md text-white hover:bg-secondary font-semibold'>
              <button className='tracking-wide text-md '><NavLink to={'/Appointment'}>Book a Consultation</NavLink> </button>
            </div> */}
          </div>

        </div>

      </div>
    </div>


  )
}

export default Navbar