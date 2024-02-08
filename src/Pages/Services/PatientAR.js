import React from 'react'
import KeyFeatures from './KeyFeatures'
import Connect from '../../Components/Contact/Connect'
import Talk from '../../Components/Talk'
const PatientAR = () => {
  return (
    <div>
 <div className=' flex py-4  flex-col lg:justify-center bg-cover bg-no bg-repeat'>
    
    <h1 className='text-3xl md:text-6xl text-center font-bold lg:py-10 pb-6 text-cGreen' > Front/Patient Help-Desk Services</h1> 
    <p className='px-4 md:px-6 tracking-wide lg:px-8 text-sm lg:pb-10 pb-4 md:text-lg  text-center'>
   
    
    
MedicoTech's Front/Patient Help-Desk Services provide a welcoming and efficient point of contact, enhancing the patient experience with friendly assistance and streamlined service navigation.</p>
<KeyFeatures F1='Welcoming Point of Contact' F2='Efficient Service Navigation' F3='Proactive Issue Resolution' D1="


MedicoTech's Help-Desk ensures a friendly and approachable first contact, creating a positive experience for patients."
D2="
Our service streamlines patient interactions, providing efficient guidance and support to enhance overall satisfaction."
D3="MedioTech's Help-Desk anticipates and resolves patient inquiries, contributing to a smooth and hassle-free healthcare journey." />

  
</div>
<Talk/>
<Connect/>
    </div>
   
  )
}

export default PatientAR