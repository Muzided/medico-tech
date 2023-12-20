import React from 'react'
import KeyFeatures from './KeyFeatures'
import Connect from '../../Components/Contact/Connect'
import Talk from '../../Components/Talk'
const IT = () => {
  return (
    <div>
   <div className=' bg-mem5 flex py-4  flex-col lg:justify-center bg-cover bg-no bg-repeat'>
    
    <h1 className='text-3xl md:text-6xl text-center font-bold pb-6 lg:pb-10 text-cGreen' > IT & Marketing Services</h1> 
    <p className='px-4 md:px-6 tracking-wide lg:px-8 text-sm lg:pb-10 pb-4 md:text-lg  text-center'>
    MedicoTech's IT & Marketing Services integrate cutting-edge technology and strategic marketing solutions, empowering healthcare providers with innovative tools for enhanced digital presence and operational efficiency.
</p>
<KeyFeatures F1='Integrated Technology Solutions' F2='Strategic Digital Marketing' F3='Innovative Operational Tools' D1="
MedicoTech combines advanced IT services with strategic marketing, providing healthcare providers a seamless integration of technology for enhanced operations."
D2="
Our services employ targeted digital marketing strategies to elevate the online presence of healthcare providers, reaching and engaging a wider audience."
D3="MedicoTech's IT & Marketing Services offer innovative tools that optimize both the digital presence and operational efficiency of healthcare providers, ensuring a competitive edge in the industry." />

  
</div><Talk/>
<Connect/>
    </div>
 
 
  )
}

export default IT