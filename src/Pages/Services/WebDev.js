import React from 'react'
import KeyFeatures from './KeyFeatures'
import Connect from '../../Components/Contact/Connect'
const WebDev = () => {
  return (
    <div className=' bg-mem5 flex py-4  flex-col lg:justify-center bg-cover bg-no bg-repeat'>
    
    <h1 className='text-3xl md:text-6xl text-center font-bold pb-6 lg:pb-10 text-cGreen' > Web Development</h1> 
    <p className='px-4 md:px-6 tracking-wide lg:px-8 text-sm lg:pb-10 pb-4 md:text-lg  text-center'>
    MedioTech's Web Development service crafts dynamic and user-friendly websites, leveraging the latest technologies to enhance online presence and functionality for businesses and organizations.  </p>
<KeyFeatures F1='Cutting-Edge Technology' F2='User-Centric Design' F3='Scalable Solutions' D1="
MedioTech utilizes the latest web development tools and frameworks to create websites that are modern, secure, and high-performing."
D2="
Our web development prioritizes user experience, ensuring intuitive navigation and engaging interfaces that captivate and retain visitors."
D3="MedioTech's Web Development service provides scalable solutions, accommodating future growth and evolving needs to keep your online presence dynamic and effective.
" />
<Connect/>
</div>
  )
}

export default WebDev