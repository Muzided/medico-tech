import React from 'react'
import KeyFeatures from './KeyFeatures'
import Connect from '../../Components/Contact/Connect'
import Talk from '../../Components/Talk'
const InOutService = () => {
  return (
    <div className=' bg-mem5 flex py-4  flex-col lg:justify-center bg-cover bg-no bg-repeat'>
    
    <h1 className='text-3xl md:text-6xl text-center font-bold pb-6 lg:pb-10 text-cGreen' > Inbound/Outbound Services</h1> 
    <p className='px-4 md:px-6 tracking-wide lg:px-8 text-sm lg:pb-10 pb-4 md:text-lg  text-center'>
    MedioTech's Inbound/Outbound Services offer dynamic communication solutions, managing both incoming inquiries and outgoing engagements seamlessly, optimizing connectivity for healthcare providers.

</p>
<KeyFeatures F1='Dynamic Communication Management' F2='Optimized Connectivity' F3='Customized Engagement Solutions' D1="


MedioTech's service seamlessly handles both incoming inquiries and outgoing engagements, ensuring efficient and responsive communication."
D2="
Our service enhances connectivity for healthcare providers, facilitating smooth interactions with patients, partners, and stakeholders."
D3="MedioTech tailors its Inbound/Outbound Services to individual needs, providing personalized solutions for effective and impactful communication.
" />
<Talk/>
<Connect/>
</div>
  )
}

export default InOutService