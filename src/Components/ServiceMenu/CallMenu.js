import React from 'react'
import { NavLink } from 'react-router-dom'

const CallMenu = () => {
  return (
    <div className='flex px-2 flex-col pt-6 gap-2'>
      <div>
        <h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'>
          <NavLink to='/CallCenter'>Call Center Services</NavLink>
        </h1>
        <h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'>
          <NavLink to='/HelpDesk'>Front/Patient Help-Desk Services</NavLink>
        </h1>
        <h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'>
          <NavLink to='/InOut'>Inbound/Outbound services</NavLink>
        </h1>
        <h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'>
          <NavLink to='/Email'>Email/SMS support</NavLink>
        </h1>
        <h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'>
          <NavLink to='/It'>IT & Marketing Services</NavLink>
        </h1>
        <h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'>
          <NavLink to='/Graphic'>Graphic Designing</NavLink>
        </h1>
        <h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'>
          <NavLink to='/WebDev'>Web-Development</NavLink>
        </h1>
        <h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'>
          <NavLink to='/seo'>SEO Services</NavLink>
        </h1>
        <h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'>
          <NavLink to='/Social'>Social Media Campaigns</NavLink>
        </h1>
      </div>

    </div>
  )
}

export default CallMenu