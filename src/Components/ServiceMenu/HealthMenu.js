import React from 'react'

const HealthMenu = () => {
  return (
    <div className='flex px-2 flex-col pt-6 gap-2'>
         <h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm' > <a href='/healthcare'>Health Care</a></h1>
         <h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'><a href='/MedicalBilling'>Medical Billing</a> </h1>
         <h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'><a href='/MedicalCoding'> Medical Coding </a> </h1>
         <h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'><a href='/Credential'>Credentialing/Enrollment</a> </h1>
         <h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'><a href='/CashFlow'>Cash Flow Practices (RCM)</a> </h1>
         <h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'><a href='/PatientSt'>Patient Statements</a> </h1>
         <h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'><a href='/PatientAR'>Patient AR-Collection </a>  </h1>
         
    </div>
  )
}

export default HealthMenu