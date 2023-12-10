import React from 'react'
import KeyFeatures from './KeyFeatures'
import Connect from '../../Components/Contact/Connect'
import Talk from '../../Components/Talk'
const MedicalCoding = () => {
  return (
    <div className=' bg-mem5 flex py-4  flex-col lg:justify-center bg-cover bg-no bg-repeat'>
    
    <h1 className='text-3xl md:text-6xl text-center font-bold pb-6 lg:pb-10 text-cGreen' > Medical Coding</h1> 
    <p className='px-4 md:px-6 tracking-wide lg:px-8 text-sm lg:pb-10 pb-4 md:text-lg  text-center'>
    MedioTech's Medical Coding Service ensures precise coding for streamlined billing, maximizing reimbursement accuracy and compliance for healthcare providers.</p>
<KeyFeatures F1='Accurate Code Assignment' F2='Compliance Focus' F3='Efficiency Through Expertise' D1="
MedioTech employs skilled coders to ensure precise and consistent coding, minimizing errors and facilitating seamless reimbursement processes."
D2="Our coding service prioritizes adherence to regulatory standards, reducing compliance risks and promoting financial integrity for healthcare providers."
D3="MedioTech's expert coders navigate complex medical documentation swiftly, optimizing coding efficiency to support healthcare providers in maximizing revenue streams." />

  <Talk/>
<Connect/>
</div>
  )
}

export default MedicalCoding