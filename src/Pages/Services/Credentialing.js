import React from 'react'
import KeyFeatures from './KeyFeatures'
import Connect from '../../Components/Contact/Connect'
import Talk from '../../Components/Talk'
const Credentialing = () => {
  return (
    <div className=' bg-mem5 flex py-4  flex-col lg:justify-center bg-cover bg-no bg-repeat'>
    
    <h1 className='text-3xl md:text-6xl text-center font-bold pb-6 lg:pb-10 text-cGreen' > Credentialing / Enrollment</h1> 
    <p className='px-4 md:px-6 tracking-wide lg:px-8 text-sm lg:pb-10 pb-4 md:text-lg  text-center'>
    MedioTech's Credentialing/Enrollment Service accelerates provider onboarding, ensuring rapid access to healthcare networks through streamlined credential verification</p>
<KeyFeatures F1='Swift Onboarding' F2='Efficient Credential Verification' F3='Streamlined Access' D1="

MedioTech expedites the credentialing and enrollment process, enabling healthcare providers to swiftly join networks and start delivering care."
D2="
Our service ensures accuracy and efficiency in credential verification, reducing administrative burden and ensuring compliance with regulatory standards. "
D3="MedioTech's Credentialing/Enrollment Service provides a seamless pathway, granting healthcare professionals quick and hassle-free access to healthcare networks." />

  <Talk/>
<Connect/>
</div> )
}

export default Credentialing