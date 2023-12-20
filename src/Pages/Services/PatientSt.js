import React from 'react'
import KeyFeatures from './KeyFeatures'
import Connect from '../../Components/Contact/Connect'
import Talk from '../../Components/Talk'
const PatientSt = () => {
  return (
    <div>
<div className=' bg-mem5 flex py-4  flex-col lg:justify-center bg-cover bg-no bg-repeat'>
    
    <h1 className='text-3xl md:text-6xl text-center font-bold lg:pb-10 pb-6 text-cGreen' > Patient Statements</h1> 
    <p className='px-4 md:px-6 tracking-wide lg:px-8 text-sm lg:pb-10 pb-4 md:text-lg  text-center'>
   
    MedicoTech's Patient Statements Service simplifies and clarifies the billing experience for patients. Through clear and concise statements, we enhance transparency, making it easier for patients to understand and manage their healthcare expenses.</p>
<KeyFeatures F1='Clear and Concise Statements' F2='Enhanced Communication' F3='Streamlined Financial Management' D1="

MedicoTech ensures patient statements are transparent and easy to understand, fostering a positive billing experience"
D2="
Our service improves communication between healthcare providers and patients, promoting clarity and addressing any billing-related concerns promptly."
D3="MedicoTech's Patient Statements Service facilitates efficient financial management for patients, empowering them to navigate and manage healthcare expenses with ease.
" />

</div>
<Talk/>
<Connect/>
    </div>
    
  )
}

export default PatientSt