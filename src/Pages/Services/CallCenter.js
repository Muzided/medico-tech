import React from 'react'
import KeyFeatures from './KeyFeatures'
import Connect from '../../Components/Contact/Connect'
import Talk from '../../Components/Talk'

const CallCenter = () => {
  return (
    <div>
 <div className=' bg-mem5 flex py-4  flex-col lg:justify-center bg-cover bg-no bg-repeat'>
    
    <h1 className='text-3xl md:text-6xl text-center font-bold lg:pb-10 pb-6 text-cGreen' > Call Center Services</h1> 
    <p className='px-4 md:px-6 tracking-wide lg:px-8 text-sm lg:pb-10 pb-4 md:text-lg  text-center'>
   
    MedioTech's Call Center Service provides responsive and personalized support, connecting healthcare providers with efficient communication solutions for enhanced patient care and operational excellence.</p>
<KeyFeatures F1='Responsive Patient Support' F2='Operational Excellence' F3='Multi-Channel Communication' D1="
MedicoTech's Call Center ensures prompt and personalized assistance, enhancing patient satisfaction and engagement."
D2="
Our service streamlines communication for healthcare providers, optimizing workflow efficiency and fostering a seamless patient experience.
"
D3="MedicoTech's Call Center Service offers versatile communication channels, including phone and digital platforms, ensuring accessibility and convenience for both healthcare providers and patients." />

  
</div>
{/* <Talk/> */}
<Connect/>
    </div>
   
  )
}

export default CallCenter