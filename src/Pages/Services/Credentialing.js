import React from 'react'
import KeyFeatures from './KeyFeatures'
import Connect from '../../Components/Contact/Connect'
import Talk from '../../Components/Talk'
import ConsentForm from '../../Components/Home/ConsentForm'
const Credentialing = () => {
  return (
    <div>
 <div className='  flex py-4  flex-col lg:justify-center bg-cover bg-no bg-repeat'>
    
    <h1 className='text-3xl md:text-6xl text-center font-bold pb-6 lg:py-10 text-cGreen' > Credentialing / Enrollment</h1> 
    <p className='px-4 md:px-6 tracking-wide lg:px-8 text-sm lg:pb-10 pb-4 md:text-lg  text-center'>
    MedicoTech's Credentialing/Enrollment Service accelerates provider onboarding, ensuring rapid access to healthcare networks through streamlined credential verification</p>
<KeyFeatures F1='Provider Initial Credentialing' F2='Network Enrollment' F3='Streamlined Access' D1="

We work closely with our healthcare providers gethering all required/necessary documents to file initial application submission to ongoing monitoring, to complete initial provier credentialing process whether they want to participate as an In-network OR Out-Of-Network  provider/practice. We handle every step with precision.
"
D2="
Expand and manage your provider network seamlessly. Our enrollment services cover all aspects, from application processing to contract management, ensuring a robust and compliant network. "
D3="MedicoTech's Credentialing/Enrollment Service provides a seamless pathway, granting healthcare professionals quick and hassle-free access to healthcare networks." />

  
</div>
<Talk/>
<ConsentForm/>
    </div>
    )
}

export default Credentialing